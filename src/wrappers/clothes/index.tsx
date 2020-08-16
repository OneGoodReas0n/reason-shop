import React from 'react';
import TshirtSvg from '../../assets/images/tshirts-min/tshirt3_1-min.jpg';
import HoodieSvg from '../../assets/images/hoodie-min/hoodie2_1-min.jpg';
import PantsSvg from '../../assets/images/pants-min/pants2_1-min.jpg';
import Category from '../../sections/category';
import { CardProps } from '../../interfaces';

const cards: CardProps[] = [
   { src: TshirtSvg, alt: 'tshirts', text: 'T-shirts', type: 'subtitle' },
   { src: HoodieSvg, alt: 'hoodies', text: 'Hoodies', type: 'subtitle' },
   { src: PantsSvg, alt: 'pants', text: 'Pants', type: 'subtitle' },
];

function Clothes() {
   return <Category cards={cards} text="Clothes" />;
}

export default Clothes;
