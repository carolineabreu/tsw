import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


 function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    // let isMounted = true;
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <h1> TSW </h1> <i className="fa-solid fa-plane"/>
          </Link>
          <div className="menu-icon" onClick = {handleClick}>
            <i className={click ? "fa-solid fa-x" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nave-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nave-item">
              <Link to="/comments" 
              className="nav-links" 
              onClick={closeMobileMenu}>
              Testimonial
              </Link>
            </li>
            <li className="nave-item">
              <Link to="/" 
              className="nav-links" 
              onClick={closeMobileMenu}>
                Country List
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
          </ul>
          {button && <button buttonStyle='btn--outline'>SIGN UP</button>}        
          </div>
      </nav>
    </>
  );
}

export default Navbar;
