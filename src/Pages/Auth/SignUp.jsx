// src/pages/Auth/SignUp.jsx
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/auth/SignUpForm';
import './Auth.css';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <div className="auth-tabs">
          <button onClick={() => navigate('/login')}>로그인</button>
          <button className="active-tab">회원가입</button>
        </div>

        {/* 🔥 폼과 로직은 여기로 분리 */}
        <SignUpForm />
      </div>
    </div>
  );
}
