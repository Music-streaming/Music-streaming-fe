import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../../api/authApi';
import { useAuth } from '../../context/useAuth';
import TextInput from './TextInput';
import Button from './Button';

export default function LoginForm() {
  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth(); // ⭐ AuthContext의 login 가져옴

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !pw) {
        alert('이메일과 비밀번호를 입력해주세요.');
        return;
      }

      // 1) API 요청
      const data = await apiLogin({ email, password: pw });
      console.log('로그인 성공:', data);

      // 2)  전역 AuthContext에 사용자 정보 저장
      setAuthUser({
        username: data.username ?? email.split('@')[0],
        email,
        recentTracks: data.recentTracks ?? [],
        playlists: data.playlists ?? [],
        followers: data.followers ?? 0,
        following: data.following ?? 0,
      });

      // 3) 메인 페이지 이동
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
