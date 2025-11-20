import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import TextInput from '../components/common/TextInput';

function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

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

      <Button onClick={() => console.log(email, pw)}>로그인</Button>
    </div>
  );
}

export default Login;
