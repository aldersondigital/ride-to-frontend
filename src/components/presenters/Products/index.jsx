import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './styles.css';

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
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {this.props.products.map((product, index) => {
                return (
                  <TableRow key={ index }>
                    <TableCell>{ product.categoryText }</TableCell>
                    <TableCell>{ product.name }</TableCell>
                    <TableCell>{ product.description }</TableCell>
                    <TableCell>
                      <a href={ product.link }>{ product.link }</a>
                    </TableCell>
                    <TableCell>
                      <Link to={ "/product/" + product.id } >Further details</Link>
                    </TableCell>
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
