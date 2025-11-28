import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <div className="auth-panel">
        <div className="auth-tabs">
          <button className="active-tab">로그인</button>
          <button onClick={() => navigate('/signup')}>회원가입</button>
        </div>

        <LoginForm />

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
