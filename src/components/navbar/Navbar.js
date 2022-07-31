import React, { useState, useEffect, useRef, Router, Route, Link } from 'react';
import "./Navbar.css"
import PressRealese from '../sections/press/PressRealese';

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
            <h2>THE SUPER LEAGUE</h2>
            <div>
                <div onClick={onClick} className="menu-trigger">
                    <div>-</div>
                </div>
                {/* MENU */}
                { isActive &&
                    <div
                        className="menu-opened"
                        ref={dropdownRef}
                        >
                        <ul>
                            <li>
                                <a href="/">PRESS RELEASE</a>
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