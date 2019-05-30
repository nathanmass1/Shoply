import React, { Component } from 'react';
import { connect } from "react-redux";
import { add, remove } from '../actions';
import { cart, table } from './Cart.module.css';



class Cart extends Component {
  render() {
    
    console.log(this.props)
    const styleObj = { table: {
      width: "100%",
      fontFamily: "arial"
    }}
    ;

    return (

  
      <div className="Cart cart-list">
         <h1> Your cart has {this.props.cart.length} items </h1>
        <table className={cart}>
          <thead>
          <tr> 
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Add More</th>
            <th>Remove</th>
          </tr>  
          </thead>
          <tbody>
        {this.props.cart.map(product => (
         <tr key={product.name} > 
           <td> {product.name} </td> 
           <td> {product.price} </td>
           <td> {product.description} </td>
           <td> <img src={product.image} alt={product.name} width="50" height="50"></img> </td>
          <td> <button onClick={
            () => {
              this.props.add(product)
            }  
          }> </button> </td>
          <td> <button onClick={
            () => {
              this.props.remove(product)
            }  
          }> </button> </td>
      

         </tr>  
        ))}
          </tbody>
          </table>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: [...state.items], cart: [...state.cart] };
}

const mapDispatchToProps = {
  add,
  remove
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);