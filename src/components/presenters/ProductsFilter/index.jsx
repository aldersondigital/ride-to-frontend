import React from 'react';
import PropTypes from 'prop-types';

class ProductsFilter extends React.Component {

  render() {
    return (
      <section className="ProductsFilter">
        Products Filter
      </section>
    )
  }
}

ProductsFilter.propTypes = {
  setProductsFilter: PropTypes.func.isRequired
};

export default ProductsFilter;
