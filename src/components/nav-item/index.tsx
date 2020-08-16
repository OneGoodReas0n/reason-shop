import React from 'react';
import './nav-item.scss';
import { Link } from 'react-router-dom';
import { routesMap } from '../../routes';

const NavItem: React.FC<{ text: string }> = ({ text }) => {
   return (
      <li className="nav-item">
         <Link to={routesMap[text.toLowerCase()]}>{text}</Link>
      </li>
   );
};

export default NavItem;
