import React from 'react';
import Category from '../../sections/category';
import { CardProps } from '../../interfaces';
import Hoodie1 from '../../assets/images/hoodie-min/hoodie1_1-min.jpg';
import Hoodie2 from '../../assets/images/hoodie-min/hoodie2_1-min.jpg';
import Hoodie3 from '../../assets/images/hoodie-min/hoodie3_1-min.jpg';

const cards: CardProps[] = [
   { src: Hoodie1, alt: 'Hoodie1', text: 'Hoodie1', type: 'subtitle', withPrice: true, price: 15 },
   { src: Hoodie2, alt: 'Hoodie2', text: 'Hoodie2', type: 'subtitle', withPrice: true, price: 18 },
   { src: Hoodie3, alt: 'Hoodie3', text: 'Hoodie3', type: 'subtitle', withPrice: true, price: 12 },
];

function Hoodies() {
   return <Category cards={cards} text="Hoodies" />;
}

export default Hoodies;
