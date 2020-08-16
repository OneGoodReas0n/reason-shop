import React from 'react';
import './caption.scss';
import TextComponent from '../text-component';
import { CaptionProps } from '../../interfaces';

function Caption({ withPrice = false, text, type, price = '' }: CaptionProps) {
   return (
      <div className="caption">
         <TextComponent text={text} type={type} />
         {withPrice && <TextComponent text={price} type={type} />}
      </div>
   );
}

export default Caption;
