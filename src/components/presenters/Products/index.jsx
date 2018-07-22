import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    if (this.props.hasProducts) {
      return (
        <section className="Products">
          Has Products
        </section>
      )
    }

    return (
      <section className="Products">
        No Products
      </section>
    )
  }
}

Products.propTypes = {
  products: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  hasProducts: PropTypes.bool.isRequired
};

export default Products;
