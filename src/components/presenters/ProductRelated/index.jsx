import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
        <Table className="Product-table">
          <TableBody>
            <TableRow>
              <TableCell>Category: { this.props.product.category }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product name: { this.props.product.name }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description: { this.props.product.description }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Link: { this.props.product.link }</TableCell>
            </TableRow>
            <TableRow>
              Image: { imageElement }
            </TableRow>
          </TableBody>
        </Table>
      </section>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
