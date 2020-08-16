import React from 'react';
import './logo.scss';
import LogoSvg from '../../assets/icons/logo.svg';
import Icon from '../image-component';

function Logo() {
   return (
      <div className="logo">
         <Icon src={LogoSvg} alt="Logo" />
      </div>
   );
}

export default Logo;
