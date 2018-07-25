import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProductContainer from "../../containers/Product";
import ProductRelatedContainer from "../../containers/ProductRelated";

class ProductWrapper extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { productId: props.match.params.productId || false };
  }
  
  render() {
    if (this.state.productId) {
      return (
        <section className="ProductWrapper">
          <Grid container className="ProductWrapper-container" spacing={16}>
            <Grid item xs={12}>
              <Grid container className="ProductWrapper-inner-container" justify="left" spacing={12}>
                <Grid item xs={3}>
                  <Paper className="ProductWrapper-product-related-container">
                    <ProductRelatedContainer productId={ this.state.productId } />
                  </Paper>
                </Grid>
      	        <Grid item xs={9}>
                  <ProductContainer productId={ this.state.productId } />
                </Grid>
              </Grid>
            </Grid> 
            <Divider />
            <Grid item xs={12}>
              <Link to='/'>Back to Products</Link>
            </Grid>
          </Grid>
        </section>
      )
    }

    return (
      <div>Invalid productId</div>
    )
  }
}

export default ProductWrapper;
