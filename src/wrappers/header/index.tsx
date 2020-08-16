import React from 'react';
import './header.scss';
import Nav from '../../components/nav';
import Logo from '../../components/logo';
import Cart from '../../components/cart';

function Header() {
   return (
      <div className="header">
         <div className="container">
            <Logo />
            <Nav />
            <Cart />
         </div>
      </div>
   );
}

export default Header;
