import React from 'react';

import {ProductCategoryRow} from './ProductCategoryRow';
import {ProductRow} from './ProductRow';

export class ProductTable extends React.Component {
  render() {
    const rows = [];
    const filterText = this.props.filterText || '';

    let lastCatoryType = null;

    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText)=== -1) {
        return;
      }

      if (lastCatoryType !== product.category)  {
        rows.push(
          <ProductCategoryRow category={product.category}/>
        );

        lastCatoryType = product.category;
      }

      rows.push(
        <ProductRow product={product}/>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>);
  }
}