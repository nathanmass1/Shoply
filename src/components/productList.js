import React, { Component } from 'react';
import Product from './Product'
import { connect } from "react-redux";
import { Link } from "react-router-dom"


class ProductList extends Component {

  render() {

    return (
      
      <div className="product-list">
        <Link to="/cart">GO TO CART</Link>
        <h1> Your cart has {this.props.cart.length} items </h1>
        <ol>
          {this.props.items.map(product => (
            <Product
              key={product.id}
              name={product.name}
              description ={product.description}
              price={product.price}
              image={product.image_url}
            />
          ))}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: [...state.items], cart: [...state.cart] };
}

const connectToState = 
  connect(mapStateToProps);

export default connectToState(ProductList);