import React from 'react';
import './text-component.scss';
import { TextComponentProps } from '../../interfaces';

const TextComponent = ({ text, type }: TextComponentProps) => {
   return (
      <p
         className={
            type === 'title'
               ? 'text-title'
               : type === 'subtitle'
               ? 'text-subtitle'
               : type === 'price'
               ? 'text-price'
               : 'text-copyright'
         }
      >
         {text}
      </p>
   );
};

export default TextComponent;
