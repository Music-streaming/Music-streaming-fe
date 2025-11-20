import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import TextInput from '../components/common/TextInput';
import { login } from '../api/auth';

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
    <div>
      <div>
        <button onClick={() => navigate('/login')}>로그인</button>
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </div>

      <p>email</p>
      <TextInput
        placeholder="example@knu.ac.kr"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <p>password</p>
      <TextInput
        placeholder="···········"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <br />
      <br />

      <Button onClick={handleLogin}>로그인</Button>
    </div>
  );
}

export default Login;
