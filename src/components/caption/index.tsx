import React from 'react';
import './caption.scss';
import TextComponent from '../text-component';
import { CaptionProps } from '../../interfaces';

function Caption({ withPrice = false, text, type, price = 0 }: CaptionProps) {
   return (
      <div className={'caption '.concat(withPrice ? ' with-price' : '')}>
         <TextComponent text={text} type={type} />
         {withPrice && <TextComponent text={'$'.concat(String(price)).concat('.00')} type="price" />}
      </div>
   );
}

export default Caption;
