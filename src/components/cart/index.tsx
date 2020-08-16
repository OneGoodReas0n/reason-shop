import React from 'react';
import './cart.scss';
import CartSvg from '../../assets/icons/cart.svg';
import Icon from '../icon';

function Cart() {
   return (
      <div className="cart">
         <Icon src={CartSvg} alt="cart" />
      </div>
   );
}

export default Cart;
