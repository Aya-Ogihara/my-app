import React from 'react';
import navbar from '../navbar.png';
const Header = () => {
  return (
    <header className='header'>
      <img src={navbar} className='navbar' alt='navbar' />
    </header>
  );
};

export default Header;
