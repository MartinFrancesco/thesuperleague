import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css"
import {
    BrowserRouter,
    Route,
    Link,
    Routes
  } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);
  //#endregion
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
    <nav className={`active ${show && 'hidden'}`}>
        <div>
            <Link to="/"><h2>THE SUPER LEAGUE</h2></Link>
            <div>
                <div onClick={onClick} className="menu-trigger">
                    <div> &#9776; </div>
                </div>
                {/* MENU */}
                { isActive &&                    
                        <div className="menu-opened"
                             ref={dropdownRef}>
                            <div onClick={onClick} className="close">X</div>
                            <ul>
                                <li>
                                    <Link to="/" onClick={onClick}>HOME</Link>  
                                </li>
                                <li>  
                                    <Link to="press" onClick={onClick}>PRESS REALESE</Link>
                                </li>
                                <li>  
                                    <Link to="albo" onClick={onClick}>ALBO D'ORO</Link>
                                </li>
                            </ul> 
                        </div>
                }
            </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;