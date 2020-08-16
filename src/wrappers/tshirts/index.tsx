import React from 'react';
import Category from '../../sections/category';
import { CardProps } from '../../interfaces';
import Tshirt1 from '../../assets/images/tshirts-min/tshirt2_1-min.jpg';
import Tshirt2 from '../../assets/images/tshirts-min/tshirt3_1-min.jpg';
import Tshirt3 from '../../assets/images/tshirts-min/tshirt4_1-min.jpg';
import Tshirt4 from '../../assets/images/tshirts-min/tshirt5_1-min.jpg';

const cards: CardProps[] = [
   { src: Tshirt1, alt: 'tshirt1', text: 'tshirt1', type: 'subtitle', withPrice: true, price: 15 },
   { src: Tshirt2, alt: 'tshirt2', text: 'tshirt2', type: 'subtitle', withPrice: true, price: 15 },
   { src: Tshirt3, alt: 'tshirt3', text: 'tshirt3', type: 'subtitle', withPrice: true, price: 15 },
   { src: Tshirt4, alt: 'tshirt4', text: 'tshirt4', type: 'subtitle', withPrice: true, price: 15 },
];

function Tshirts() {
   return <Category cards={cards} text="Tshirts" />;
}

export default Tshirts;
