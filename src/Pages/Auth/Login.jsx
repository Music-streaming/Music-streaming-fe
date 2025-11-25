import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import TextInput from '../../components/common/TextInput';
import { login } from '../../api/auth';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !pw) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const data = await login({ email, password: pw });
      console.log('로그인 성공 응답:', data);

      alert('로그인에 성공했습니다!');

      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <div className="auth-tabs">
          <button className="active-tab" onClick={() => navigate('/login')}>
            로그인
          </button>
          <button onClick={() => navigate('/signup')}>회원가입</button>
        </div>

        <div className="auth-form">
          <label className="field-label">이메일 주소</label>
          <TextInput
            placeholder="example@knu.ac.kr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <label className="field-label">비밀번호</label>
          <TextInput
            placeholder="••••••••"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />

          <br />
          <br />

          <Button className="auth-submit" onClick={handleLogin}>
            로그인
          </Button>
        </div>

        <div className="login-links">
          <a href="#">아이디 찾기</a>
          <span>/</span>
          <a href="#">비밀번호 찾기</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
