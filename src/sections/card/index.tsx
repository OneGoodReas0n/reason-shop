import React from 'react';
import './card.scss';
import ImageComponent from '../../components/image-component';
import Caption from '../../components/caption';
import { CardProps } from '../../interfaces';
import { Link } from 'react-router-dom';
import { routesMap } from '../../routes';

function Card({ src, alt, text, type = 'subtitle', withPrice = false, price = 0 }: CardProps) {
   return (
      <div className="card">
         <Link to={routesMap[alt]}>
            <ImageComponent src={src} alt={alt} />
            <Caption text={text} type={type} withPrice={withPrice} price={price} />
         </Link>
      </div>
   );
}

export default Card;
