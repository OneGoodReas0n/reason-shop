import React from 'react';
import './social-item.scss';
import Icon from '../icon';
import { IconProps } from '../../interfaces';

function SocialItem({ src, alt }: IconProps) {
   return (
      <div className="social-item">
         <Icon src={src} alt={alt} />
      </div>
   );
}

export default SocialItem;
