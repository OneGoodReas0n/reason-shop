import React from 'react';
import './products.scss';
import TextComponent from '../../components/text-component';
import Category from '../../sections/category';
import ClothesSvg from '../../assets/images/tshirts-min/tshirt2_1-min.jpg';
import ShoesSvg from '../../assets/images/shoes-min/shoes-only2_1-min.jpg';

function Products() {
   return (
      <div className="products">
         <div className="container">
            <div className="content">
               <TextComponent text="products" type="title" />
               <div className="categories">
                  <Category text="Clothes" src={ClothesSvg} alt="clothes" />
                  <Category text="Shoes" src={ShoesSvg} alt="shoes" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Products;
