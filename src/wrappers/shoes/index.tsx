import React from 'react';
import Category from '../../sections/category';
import { CardProps } from '../../interfaces';
import Shoes1 from '../../assets/images/shoes-min/shoes-only1_1-min.jpg';
import Shoes2 from '../../assets/images/shoes-min/shoes-only2_1-min.jpg';
import Shoes3 from '../../assets/images/shoes-min/shoes-only3_1-min.jpg';

const cards: CardProps[] = [
   { src: Shoes1, alt: 'Shoes1', text: 'Shoes1', type: 'subtitle', withPrice: true, price: 15 },
   { src: Shoes2, alt: 'Shoes2', text: 'Shoes2', type: 'subtitle', withPrice: true, price: 18 },
   { src: Shoes3, alt: 'Shoes3', text: 'Shoes3', type: 'subtitle', withPrice: true, price: 12 },
];

function Shoes() {
   return <Category cards={cards} text="Shoes" />;
}

export default Shoes;
