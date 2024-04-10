import React from 'react';
import './Navbar.css';
import { FaMediumM } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';

export const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className='navbar'>
      <FaMediumM className='logo' />
      <ul>
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>PROJECTS</li>
        <li>EXPERIENCE</li>
      </ul>
      <div className='contact'>CONTACT</div>
      <div className='modeIcon' onClick={toggleMode}>
        {theme === 'dark' ? <IoIosSunny className='sunIcon' /> : <FaMoon className='nightIcon' />}
      </div>
    </div>
  );
};
