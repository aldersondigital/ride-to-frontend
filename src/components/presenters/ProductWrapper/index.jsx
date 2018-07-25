import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ProductContainer from "../../containers/Product";

class ProductWrapper extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { productId: props.match.params.productId || false };
  }
  
  render() {
    if (this.state.productId) {
      return (
        <section className="ProductWrapper">
          <Link to='/'>Home</Link>
          <ProductContainer productId={ this.state.productId } />
        </section>
      )
    }

    return (
      <div>Invalid productId</div>
    )
  }
}

export default ProductWrapper;
