import React from 'react';
import './logo.scss';
import LogoSvg from '../../assets/icons/logo.svg';
import Icon from '../image-component';
import { Link } from 'react-router-dom';
import { routesMap } from '../../routes';

function Logo() {
   return (
      <div className="logo">
         <Link to={routesMap['home']}>
            <Icon src={LogoSvg} alt="Logo" />
         </Link>
      </div>
   );
}

export default Logo;
