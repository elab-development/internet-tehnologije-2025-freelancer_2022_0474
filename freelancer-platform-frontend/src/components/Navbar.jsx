import { Link } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="left-navbar">
            <img src="../../public/images/logo-upwork.jpg" alt="Logo" />
        </div>
        <nav>
          <ul id="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/freelancers">Freelancers</Link>
            </li>
          </ul>
        </nav>
        <div className="right-navbar">
            <Link to="/register"><button id="register-btn">Register</button></Link>
            <Link to="/login"><button id="login-btn">Login</button></Link>
        </div>


    </div>
    
  );
}
