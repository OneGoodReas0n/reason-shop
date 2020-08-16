import React from 'react';
import Category from '../../sections/category';
import { CardProps } from '../../interfaces';
import Pants1 from '../../assets/images/pants-min/pants1_1-min.jpg';
import Pants2 from '../../assets/images/pants-min/pants2_1-min.jpg';
import Pants3 from '../../assets/images/pants-min/pants3_1-min.jpg';

const cards: CardProps[] = [
   { src: Pants1, alt: 'Pants1', text: 'Pants1', type: 'subtitle', withPrice: true, price: 10 },
   { src: Pants2, alt: 'Pants2', text: 'Pants2', type: 'subtitle', withPrice: true, price: 12 },
   { src: Pants3, alt: 'Pants3', text: 'Pants3', type: 'subtitle', withPrice: true, price: 13 },
];

function Pants() {
   return <Category cards={cards} text="Pants" />;
}

export default Pants;
