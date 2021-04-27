import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = (e) => {
    e.preventDefault()
    this.setState({name: e.target.value})
  }

  handleIngredientChange = (e) => {
    e.preventDefault()
    this.setState({ingredients: [...this.state.ingredients, e.target.value]})
    console.log(e.target.value)
  }


  handleSubmit = (e, order) => {
    e.preventDefault();
    this.props.submitOrder(order);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} value={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
        <button onClick={e => this.handleSubmit(e, this.state)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
