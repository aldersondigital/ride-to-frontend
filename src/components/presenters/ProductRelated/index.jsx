import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import styles from './styles.css';

class ProductRelated extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { selectedRelatedProductId: false };
  }

  handleRelatedProductClick(e, productId) {
    this.setState({ selectedRelatedProductId: productId });
  }

  render() {
    if (this.state.selectedRelatedProductId === false) {
      
      return (
        <section className="ProductRelated">
          <List component="nav" subheader={ <ListSubheader component="div">Related products</ListSubheader> } >
            {this.props.products.map((product, index) => {
              const productId = product.id;

              return (
                <ListItem button key={ index } onClick={ (e) => this.handleRelatedProductClick(e, productId) } >
                  <ListItemText inset primary={ product.name } />
                </ListItem>
              )
            })}
          </List>
        </section>
      )
    }

    return <Redirect to={ '/product/' + this.state.selectedRelatedProductId } />;
  }
}

ProductRelated.propTypes = {
  products: PropTypes.array.isRequired
};

export default withRouter(ProductRelated)
