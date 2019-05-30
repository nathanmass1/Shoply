import React, { Component } from 'react'
import { Route } from "react-router-dom";
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/cart'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <ProductList />} />
        <Route exact path="/products/:name" render={rtProps => <ProductDetails {...rtProps} />} />
        <Route exact path="/cart" render={rtProps => <Cart {...rtProps} />} />
      </div>
    )
  }
}
