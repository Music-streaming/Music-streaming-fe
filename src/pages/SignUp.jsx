import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import TextInput from '../components/common/TextInput';

function SignUp() {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwCheck] = useState('');
  const navigate = useNavigate();
  const isPwMath = pw.length > 0 && pw === pwcheck;

  const handleSignUp = () => {
    if (pw !== pwcheck) {
      alert('비밀번호가 서로 일치하지 않습니다.');
      return;
    }

    if (!email || !id || !pw) {
      alert('이메일, 아이디, 비밀버호를 모두 입력해주세요.');
      return;
    }

    alert('회원가입이 완료되었습니다!');
    navigate('/login');
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

      <p>아이디</p>
      <TextInput
        placeholder="honggildong"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />

      <p>비밀번호 입력</p>
      <TextInput
        placeholder="···········"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <br />

      <p>비밀번호 확인</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <TextInput
          placeholder="···········"
          type="password"
          value={pwcheck}
          onChange={(e) => setPwCheck(e.target.value)}
        />
        {isPwMath && <span>✅</span>}
      </div>

      <br />
      <br />

      <Button onClick={handleSignUp}>회원가입</Button>
    </div>
  );
}

export default SignUp;
