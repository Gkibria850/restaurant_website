import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { navLinks } from '../../Data';
import ScrollLink from '../link/ScrollLink';
import { FaCircleArrowRight } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import { animateScroll } from 'react-scroll';
import {Link} from 'react-scroll';

import "./header.css";

const Header = () => {
  //
  const [scrollNaw, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true); // fixed typo
    } else {
      setScrollNav(false);
    }
  };
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };


  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav); // cleanup
  }, []); // run once on mount

  return (
    <header className={`${scrollNaw ? 'scroll-header' : ''} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav-logo">
          <img src={Logo} alt="Site Logo" className="nav-logo-img" />
        </Link>
        <div className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((navLink, index) => (
              <li className="nav-item" key={index}>
                <ScrollLink 
                  to={navLink} 
                  name={navLink} 
                  extraProps={{ spy: true }}
                  className="nav-link" 
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-buttons">
        <ScrollLink 
                  to='reservation' 
                  extraProps={{ offset: -150 }}
                  name='Book Now'
                  className='button'
                  icon={<FaCircleArrowRight className='button-icon'/>}
                />
               <CgMenuLeftAlt className='nav-toggler'/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
