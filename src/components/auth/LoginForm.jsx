import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import TextInput from './TextInput';
import { login } from '../../api/auth';
import { useAuth } from '../../context/useAuth';

export default function LoginForm() {
  const navigate = useNavigate();
  const { login: saveUser } = useAuth();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = async () => {
    if (!email || !pw) return alert('이메일과 비밀번호를 입력해주세요.');

    try {
      const data = await login({ email, password: pw });

      saveUser(data); // AuthContext 저장
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-form">
      <label className="field-label">이메일 주소</label>
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />

      <label className="field-label">비밀번호</label>
      <TextInput
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
