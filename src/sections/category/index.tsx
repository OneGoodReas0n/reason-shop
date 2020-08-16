import React from 'react';
import './category.scss';
import TextComponent from '../../components/text-component';
import { CategoryProps } from '../../interfaces';
import Card from '../card';

const Category = ({ cards, text, type = 'title' }: CategoryProps) => {
   const cardElements = cards.map((e) => {
      return (
         <Card
            src={e.src}
            alt={e.alt}
            key={e.src}
            text={e.text}
            type={e.type}
            withPrice={e.withPrice}
            price={e.price}
         />
      );
   });
   return (
      <div className="category">
         <div className="container">
            <div className="content">
               <TextComponent text={text} type={type} />
               <div className="cards">{cardElements}</div>
            </div>
         </div>
      </div>
   );
};

export default Category;
