import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { Button } from '../Button';
import './Navbar.css';
import Auth from '../../Auth'


function Navbar() {
  const [click, setclick] = useState(false);
  const [button,setButton] = useState(true);
  
  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);
  
  const showButton = () => {
    if (window.innerWidth <= 950){
      setButton(false);
    }else{
      setButton(true);
    }
  }

  useEffect( () => {
    showButton()
  },[]);



  window.addEventListener('resize',showButton);
  
  return (
    
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
              Stand With Dorayaki
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "bi bi-x" : "bi bi-list"}></i>
            </div>


            <ul className={click ? "nav-menu active" : "nav-menu"}>
                {/* <li className="nav-item">
                  <Link to ="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link to ="/AddRecipe" className="nav-links" onClick={closeMobileMenu}>
                    Add Recipe
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to ="/AddBahan" className="nav-links" onClick={closeMobileMenu}>
                    Add Bahan
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to ="/report" className="nav-links" onClick={closeMobileMenu}>
                    Requests
                  </Link>
                </li>

                  <li>
                    <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Log out
                    </Link>
                </li>
                
            </ul>

            {button && <Button onClick={()=>Auth.logout()} linkto = "/login" customstyle="flip"> Log out</Button>}



          </div>
      </nav>

    </>
  )
}

export default Navbar

