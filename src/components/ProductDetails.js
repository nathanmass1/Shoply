import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { add, remove } from '../actions'

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() {  this.props.add(this.props); }
  remove() { this.props.remove(this.props); }

  render() {
    let itemName = this.props.match.params.name;
    let product = this.props.items.filter(item => item.name === itemName)

    return (
      <Card>
      <CardBody>
        <CardTitle className="font-weight-bold text-center">
          {product[0].name}
        </CardTitle>
        <CardText className="font-italic">{product[0].description}</CardText>
        <p><b>Price:</b> {product[0].price}</p>
        <img src={product[0].image_url} alt="noimage" height="100" width="100"></img>
      </CardBody>
      <button onClick={this.add}> <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart_full.png" width="20" height="20" id="fullcart" alt="fullcart" /></button>
      <button onClick={this.remove}> <img src="https://image.flaticon.com/icons/svg/34/34568.svg" width="20" height="20" id="emptycart" alt="emptycart" /></button>
      <div> There are {this.props.cart.length} items in your cart.</div>
    </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: [...state.cart],
    items: [...state.items]
  };
}

const mapDispatchToProps = {
  add,
  remove
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);