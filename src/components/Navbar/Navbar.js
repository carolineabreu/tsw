import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
  <nav className="navbar">
      <div className="navbar-main">
          <Link to='/' className='navbar-box' onClick={closeMobileMenu}>
            <h1 className='navbar-logo' > TSW </h1> 
            
            <div className='plane'>
            <i className="fa-solid fa-plane" />
            </div>
            </Link>
            </div>

            <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-list" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/comments"
                className="nav-list"
                onClick={closeMobileMenu}>
                Comments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="country-list"
                className="nav-list"
                onClick={closeMobileMenu}>
                Country List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to='/sign-up'
                className='nav-list-btn'
                onClick={closeMobileMenu}>
                {button && <button className='btn-nav'  >SIGN UP</button>}
              </Link>
            </li>
          </ul>
  </nav>
    </>
  );
}

export default Navbar;
