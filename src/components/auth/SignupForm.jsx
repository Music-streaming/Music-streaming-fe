import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import TextInput from './TextInput';
import { signup } from '../../api/auth';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwcheck, setPwCheck] = useState('');

  const navigate = useNavigate();

  const isPwMatch = pw.length > 0 && pw === pwcheck;

  const handleSignUp = async () => {
    if (!email || !id || !pw || !pwcheck) {
      alert('이메일, 아이디, 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (!isPwMatch) {
      alert('비밀번호가 서로 일치하지 않습니다.');
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
    <div className="auth-form">
      <label className="field-label">이메일 주소</label>
      <TextInput
        placeholder="example@knu.ac.kr"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="field-label">아이디</label>
      <TextInput
        placeholder="honggildong"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <label className="field-label">비밀번호 입력</label>
      <TextInput
        placeholder="••••••••"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <label className="field-label">비밀번호 확인</label>
      <div className="pw-check">
        <TextInput
          placeholder="••••••••"
          type="password"
          value={pwcheck}
          onChange={(e) => setPwCheck(e.target.value)}
        />
        {isPwMatch && <span className="check-icon">✔</span>}
      </div>

      <Button className="auth-submit" onClick={handleSignUp}>
        회원가입
      </Button>
    </div>
  );
}
