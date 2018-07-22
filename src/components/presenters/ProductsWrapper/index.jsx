import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ProductsContainer from '../../containers/Products';
import ProductsFilterContainer from '../../containers/ProductsFilter';
import './styles.css';

class ProductsWrapper extends React.Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <section className="Home">
        <Grid container>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={24}>
              <Grid item>
                <Typography type="subheading" style={{minWidth:300, maxWidth: 300}}>
                  All Products
                </Typography>
                <ProductsFilterContainer />
                <ProductsContainer />
              </Grid>
            </Grid>
            <Divider className="Home-divider"/>
          </Grid>
        </Grid>
      </section>
    )
  }
}

ProductsWrapper.propTypes = {
  fetchProducts: PropTypes.func.isRequired
};

export default ProductsWrapper;
