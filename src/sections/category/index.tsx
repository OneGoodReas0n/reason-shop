import React from 'react';
import './category.scss';
import ImageComponent from '../../components/image-component';
import Caption from '../../components/caption';
import { CategoryProps } from '../../interfaces';

function Category({ src, alt, text, type = 'subtitle' }: CategoryProps) {
   return (
      <div className="category">
         <ImageComponent src={src} alt={alt} />
         <Caption text={text} type={type} />
      </div>
   );
}

export default Category;
