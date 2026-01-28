import { Link, useNavigate } from "react-router-dom";
import '../css/Navbar.css';
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Hamburger za mobilni prikaz */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu size={25} color="white" />
      </div>

      <nav className={menuOpen ? "open" : ""}>
        <ul id="navbar-list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link to="/freelancers" onClick={() => setMenuOpen(false)}>Freelancers</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

          <li className="mobile-account">
            {user ? (
              <div className="account-section">
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  <span id="account-icon" className="profile-icon"><CgProfile /> {user.firstname}</span>
                </Link>
                <button id="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="account-section">
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <button id="register-btn">Register</button>
                </Link>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <button id="login-btn">Login</button>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>

      <div className="right-navbar">
        {user ? (
          <div className="account-section">
            <Link to="/profile">
              <span id="account-icon" className="profile-icon"><CgProfile /> {user.firstname}</span>
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
