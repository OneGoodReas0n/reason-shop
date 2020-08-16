import React from 'react';
import './nav-item.scss';

const NavItem: React.FC<{ text: string }> = ({ text }) => {
   return <li className="nav-item">{text}</li>;
};

export default NavItem;
