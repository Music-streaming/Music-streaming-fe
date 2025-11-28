import { useAuth } from '../../context/useAuth';
import GuestHome from './HomeGuest';
import UserHome from './HomeUser';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <UserHome /> : <GuestHome />;
}
