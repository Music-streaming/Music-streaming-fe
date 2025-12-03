// src/components/auth/LoginForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../../api/authApi';
import { useAuth } from '../../context/useAuth';
import TextInput from './TextInput';
import Button from './Button';

export default function LoginForm() {
  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !pw) {
        alert('이메일과 비밀번호를 입력해주세요.');
        return;
      }

      // 1) 로그인 API 요청
      const data = await apiLogin({ email, password: pw });
      console.log('로그인 성공:', data);

      // 🔴 여기서 로그인 응답의 id를 꼭 저장해줘야 함!
      //    백엔드가 userId로 준다면 id: data.userId 로 바꿔줘.
      setAuthUser({
        id: data.id, // <= 이 값이 나중에 팔로워/팔로잉 조회에 쓰임
        username: data.username ?? email.split('@')[0],
        email,
        token: data.token,
        recentTracks: data.recentTracks ?? [],
        playlists: data.playlists ?? [],
        followers: 0, // 처음엔 0으로 두고
        following: 0, // 모달 열 때 실제 값 불러오기
      });

      navigate('/');
    } catch (err) {
      alert(err.message || '로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="auth-form">
      <label className="field-label">이메일 주소</label>
      <TextInput
        placeholder="example@knu.ac.kr"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="field-label">비밀번호</label>
      <TextInput
        placeholder="••••••••"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <Button className="auth-submit" onClick={handleLogin}>
        로그인
      </Button>
    </div>
  );
}
