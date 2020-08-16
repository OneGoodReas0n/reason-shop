import React from 'react';
import './social-item.scss';
import Icon from '../image-component';
import { ImageProps } from '../../interfaces';

function SocialItem({ src, alt }: ImageProps) {
   return (
      <div className="social-item">
         <Icon src={src} alt={alt} />
      </div>
   );
}

export default SocialItem;
