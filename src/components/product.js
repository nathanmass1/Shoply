import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { add, remove } from '../actions'

class Product extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() {  this.props.add(this.props); }
  remove() { this.props.remove(this.props); }

  render() {
    let product = this.props

    return (
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {product.name}
            </CardTitle>
            <CardText className="font-italic">{product.description}</CardText>
            <p><b>Price:</b> {product.price}</p>
            <img src={product.image} alt="noimage" height="100" width="100"></img>
          </CardBody>
          <button onClick={this.add}> <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart_full.png" width="20" height="20" id="fullcart" alt="fullcart" /></button>
          <button onClick={this.remove}> <img src="https://image.flaticon.com/icons/svg/34/34568.svg" width="20" height="20" id="emptycart" alt="emptycart" /></button>

        </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = {
  add,
  remove
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);