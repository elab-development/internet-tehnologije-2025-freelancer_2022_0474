import { Link, useNavigate } from "react-router-dom";
import '../css/Navbar.css';
import { CgProfile } from "react-icons/cg";

export default function Navbar() {

  const navigate = useNavigate();


  const user = (() => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
  })();



  const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  alert("Logged out successfully!");
  navigate("/");
  };

  return (
    <div className='navbar'>
      <div className="left-navbar">
        <img src="../../public/images/logo-upwork.jpg" alt="Logo" />
      </div>

      <nav>
        <ul id="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/freelancers">Freelancers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="right-navbar">
        {user ? (
          <div className="account-section">
            <Link to="/profile">
              <span id="account-icon" className="profile-icon" ><CgProfile /> {user.firstname}</span>
            </Link>
            <button style={{padding: '5px 10px', marginLeft: '10px'}} id="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/register">
              <button id="register-btn">Register</button>
            </Link>
            <Link to="/login">
              <button id="login-btn">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
