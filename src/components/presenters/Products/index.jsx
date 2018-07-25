import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Products extends React.Component {
  
  render() {
    if (this.props.hasProducts) {
      return (
        <section className="Products">
          <Paper className="Products-table-wrapper">
            <Table className="Products-table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {this.props.products.map((product, index) => {
                return (
                  <TableRow key={ index }>
                    <Link to={ "/product/" + product.id } >
                      <TableCell>{ product.category }</TableCell>
                      <TableCell>{ product.name }</TableCell>
                      <TableCell>{ product.description }</TableCell>
                      <TableCell>{ product.link }</TableCell>
                    </Link>
                  </TableRow>
              )})}
              </TableBody>
            </Table>
          </Paper>
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
