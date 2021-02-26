import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../store/index';
import { ICartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart);
  console.log(cart);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.product.quantity}</td>
            <td>{(item.product.price * item.product.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Cart;
