import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import TextInput from '../components/common/TextInput';
import { signup } from '../api/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwCheck] = useState('');
  const navigate = useNavigate();
  const isPwMatch = pw.length > 0 && pw === pwcheck;

  const handleSignUp = async () => {
    if (pw !== pwcheck) {
      alert('비밀번호가 서로 일치하지 않습니다.');
      return;
    }

    if (!email || !id || !pw) {
      alert('이메일, 아이디, 비밀버호를 모두 입력해주세요.');
      return;
    }

    try {
      const data = await signup({
        email,
        password: pw,
        username: id,
      });

      console.log('회원가입 성공 응답:', data);
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch (err) {
      alert(err.message || '회원가입 중 오류가 발생했습니다.');
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

      <p>아이디</p>
      <TextInput
        placeholder="honggildong"
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
        {isPwMatch && <span>✅</span>}
      </div>

      <br />
      <br />

      <Button onClick={handleSignUp}>회원가입</Button>
    </div>
  );
}

export default SignUp;
