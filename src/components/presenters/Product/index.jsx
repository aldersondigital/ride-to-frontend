import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './styles.css';

class Product extends React.Component {

  render() {

    if (this.props.product === false) {
      return (
        <Redirect to="/"/>
      );
    }

    let imageElement = "No image";

    if (this.props.product.image) {
      imageElement = <img src={ this.props.product.image } />;        
    }

    return (
      <section className="Product">
        <Paper className="Product-table-wrapper">
          <Table className="Product-table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>{ this.props.product.categoryText }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product name</TableCell>
                <TableCell>{ this.props.product.name }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{ this.props.product.description }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Link</TableCell>
                <TableCell>{ this.props.product.link }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>{ imageElement }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </section>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
