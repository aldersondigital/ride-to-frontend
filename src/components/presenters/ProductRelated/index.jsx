import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import styles from './styles.css';

class ProductRelated extends React.Component {

  render() {

    return (
      <section className="ProductRelated">
        <List 
          component="nav" 
          subheader={ <ListSubheader component="div">Related products</ListSubheader> } 
        >
          {this.props.products.map((product, index) => {
            return (
              <ListItem button key={ index }>
                <Link to={ "/product/" + product.id } >
                  <ListItemText primary={ product.name } />
                </Link>
              </ListItem>
            )
          })}
        </List>
      </section>
    )
  }
}

ProductRelated.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductRelated;
