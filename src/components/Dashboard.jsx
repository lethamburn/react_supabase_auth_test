import { useNavigate } from "react-router";
import { useAuth } from "../contexts/Auth";

export function Dashboard() {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    navigate("/login");
  }

  return (
    <div>
      <p>Welcome, {user?.id}!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
