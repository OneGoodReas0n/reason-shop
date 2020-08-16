import React from 'react';
import './cart.scss';
import CartSvg from '../../assets/icons/cart.svg';
import ImageComponent from '../image-component';

function Cart() {
   return (
      <div className="cart">
         <ImageComponent src={CartSvg} alt="cart" />
      </div>
   );
}

export default Cart;
