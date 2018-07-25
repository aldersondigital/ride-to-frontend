import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { PRODUCTS_FILTER_ALL, PRODUCTS_FILTER_FILM, PRODUCTS_FILTER_WEB } from '../../../actionTypes/constants';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class ProductsFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { filter: PRODUCTS_FILTER_ALL };
    this.handleFilterSelectionChange = this.handleFilterSelectionChange.bind(this);
  }

  handleFilterSelectionChange(e) {
    this.setState({ filter: e.target.value });
    this.props.setProductsFilter(e.target.value);
  };

  render() {
    return (
      <section className="ProductsFilter">
        <FormControl component="fieldset" required className="ProductsFilter-form">
          <FormLabel component="legend">Filter by category</FormLabel>
	        
          <RadioGroup
            aria-label="Category"
            name="category"
            className="ProductsFilter-radio-buttons"
            value={ this.state.filter }
            onChange={ this.handleFilterSelectionChange }
          >
            <FormControlLabel value={ PRODUCTS_FILTER_ALL } control={<Radio />} label="All" />
            <FormControlLabel value={ PRODUCTS_FILTER_FILM } control={<Radio />} label="Film" />
            <FormControlLabel value={ PRODUCTS_FILTER_WEB } control={<Radio />} label="Web" />
          </RadioGroup>
        </FormControl>
      </section>
    )
  }
}

ProductsFilter.propTypes = {
  setProductsFilter: PropTypes.func.isRequired
};

export default ProductsFilter;
