import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProductsContainer from '../../containers/Products';
import ProductsFilterContainer from '../../containers/ProductsFilter';
import styles from './styles.css';
/*
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
*/

class ProductsWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchProducts();
  }

  render() {
    return (
      <section className="ProductsWrapper">
        <Grid container className="ProductsWrapper-container" spacing={16}>
          <Grid item xs={12}>
    	      <Grid container className="ProductsWrapper-inner-container" justify="left" spacing={12}>
              <Grid item xs={3}>
                <Paper className="ProductsWrapper-products-filter-container">
                  <ProductsFilterContainer />
                </Paper>
	            </Grid>
      	      <Grid item xs={9}>
                <Paper className="ProductsWrapper-products-container">
                  <ProductsContainer />
                </Paper>
              </Grid>
            </Grid>
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
