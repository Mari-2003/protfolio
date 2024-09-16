import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { FaMediumM } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';
import './Navbar.css';

function Example({ args, theme, setTheme }) {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
  };

  const toggleMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, []);

  // Scroll to specific section on route hash change with an offset for navbar
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const yOffset = -100; // Adjust this value according to your navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const handleNavItemClick = () => {
    if (isOpen) {
      toggle(); // Collapse the navbar if it is open
    }
  };

  return (
    <div>
      <div className={`navbarAlignment ${scrolling ? 'scrolling-navbar' : ''}`}>
        <Navbar {...args} light expand="md">
          <div className="flexCEnter">
            <div>
              <NavbarBrand>
                <FaMediumM className="logo" />
              </NavbarBrand>
            </div>
            <div>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink
                      className={location.hash === '#home' ? 'active' : ''}
                      href="#home"
                      onClick={handleNavItemClick}
                    >
                      HOME
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={location.hash === '#aboutme' ? 'active' : ''}
                      href="#aboutme"
                      onClick={handleNavItemClick}
                    >
                      ABOUT ME
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={location.hash === '#projects' ? 'active' : ''}
                      href="#projects"
                      onClick={handleNavItemClick}
                    >
                      PROJECTS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={location.hash === '#experience' ? 'active' : ''}
                      href="#experience"
                      onClick={handleNavItemClick}
                    >
                      EXPERIENCE
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
            <div className="parentContainer d-flex align-items-center">
              <Button href="#contact" className="contactNavbarButton" type="button">
                CONTACT ME
              </Button>
              <div
                className={`modeIcon ms-3 ${
                  theme === 'dark' ? 'darkMode' : 'lightMode'
                }`}
                onClick={toggleMode}
              >
                {theme === 'dark' ? <IoIosSunny className="sunIcon" /> : <FaMoon className="nightIcon" />}
              </div>
            </div>
          </div>
        </Navbar>
      </div>
      {isOpen && <div className="overlay"></div>}
    </div>
  );
}

export default Example;
