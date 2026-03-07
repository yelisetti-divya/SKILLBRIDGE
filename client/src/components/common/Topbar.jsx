import useAuth from '../../hooks/useAuth';
export default function Topbar() {
  const { user, logout } = useAuth();
  return (
    <header>
      <span>SkillBridge</span>
      {user && <button onClick={logout}>Logout</button>}
    </header>
  );
}