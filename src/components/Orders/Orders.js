import React from 'react';
import PropTypes from 'prop-types';
import './Orders.css';

const Orders = ({ orders, deleteSelectedOrder }) => {
  const orderEls = orders.map(order => {
    return (
      <div key={order.id} className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li>{ingredient}</li>
          })}
        </ul>
        <button onClick={() => deleteSelectedOrder(order.id)}>Cancel Order</button>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;

Orders.propTypes = {
  orders: PropTypes.array,
  deleteSelectedOrder: PropTypes.func
}