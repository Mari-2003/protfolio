import React, { useState } from 'react';
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
  const toggleMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} light expand="md" >
        <div className='flexCEnter'>
          <div>
          <NavbarBrand><FaMediumM className='logo' /></NavbarBrand>
          </div>
   <div>
   <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              ABOUT ME
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
             PROJECTS
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
             EXPERIENCE
              </NavLink>
              </NavItem>
          </Nav>
       
        </Collapse>
   </div>
   <div className=' parentContainer d-flex align-items-center' >
   <Button className='contactButton' type='button'>CONTACT ME</Button>
   <div className={`modeIcon ms-3 ${theme === 'dark' ? 'darkMode' : 'lightMode'}`} onClick={toggleMode}>
      {theme === 'dark' ? <IoIosSunny className='sunIcon' /> : <FaMoon className='nightIcon' />}
    </div>
   </div>
        </div>
    
      </Navbar>
    </div>
    
  );
}

export default Example;