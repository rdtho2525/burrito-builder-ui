import React, { Component } from 'react';
import './App.css';
import { getOrders, postOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: []
    };
  }

  submitOrder = (order) => {
    postOrders(order)
      .then(ordersData => this.setState({orders: [...this.state.orders, ordersData]}))
      .catch(error => console.error('Error posting:', error))
  }

  componentDidMount() {
    getOrders()
      .then(ordersData => this.setState({ orders: ordersData.orders}))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm submitOrder={this.submitOrder} />
        </header>

      <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
