import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import './Navbar.css'

function Example( { args, theme, setTheme }) {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
const location = useLocation()

  const toggle = () => setIsOpen(!isOpen);

  const toggleMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <div>
      

  <div className={`navbarAlignment ${scrolling ? 'scrolling-navbar' : ''}`}>



     
    <Navbar
        {...args}
        light
        expand="md"
       
      >
        <div className='flexCEnter'>
          <div>
          <NavbarBrand><FaMediumM className='logo' /></NavbarBrand>
          </div>
   <div>
   <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <NavLink className={location.hash === '#home' ? 'active' : ''} to='#home' href='#home'>HOME</NavLink>
            </NavItem>
            <NavItem >
            <NavLink className={location.hash === '#aboutme' ? 'active' : ''} to='#aboutme' href='#aboutme'>ABOUT ME</NavLink>
              </NavItem>
              <NavItem >
              <NavLink className={location.hash === '#projects' ? 'active' : ''} to='#projects' href='#projects'>PROJECTS</NavLink>
              </NavItem>
              <NavItem>
              <NavLink className={location.hash === '#experience' ? 'active' : ''} to='#experience' href='#experience'>EXPERIENCE</NavLink>
              </NavItem>
          </Nav>
       
        </Collapse>
   </div>
   <div className=' parentContainer d-flex align-items-center' >
   <Button href='#contact' className='contactNavbarButton' type='button'>CONTACT ME</Button>
   <div className={`modeIcon ms-3 ${theme === 'dark' ? 'darkMode' : 'lightMode'}`} onClick={toggleMode}>
      {theme === 'dark' ? <IoIosSunny className='sunIcon' /> : <FaMoon className='nightIcon' />}
    </div>
   </div>
        </div>
      </Navbar>
      </div>
      
    </div>
    
  );
}

export default Example;