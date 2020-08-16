import React from 'react';
import ClothesSvg from '../../assets/images/tshirts-min/tshirt2_1-min.jpg';
import ShoesSvg from '../../assets/images/shoes-min/shoes-only2_1-min.jpg';
import Category from '../../sections/category';
import { CardProps } from '../../interfaces';

const cards: CardProps[] = [
   { src: ClothesSvg, alt: 'clothes', text: 'Clothes', type: 'subtitle' },
   { src: ShoesSvg, alt: 'shoes', text: 'Shoes', type: 'subtitle' },
];

function Products() {
   return <Category cards={cards} text="Products" />;
}

export default Products;
