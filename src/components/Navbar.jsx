import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <h2>♻ Smart E-Waste</h2>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/process">Process</Link>
        <Link to="/dashboard">Dashboard</Link>

          {user ? (
    <div
      className="avatar"
      onClick={() => navigate("/profile")}
    >
      {user.email[0].toUpperCase()}
    </div>
  ) : (
    <Link to="/login">Login</Link>
  )}
      </div>
    </nav>
  );
}