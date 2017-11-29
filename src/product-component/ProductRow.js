import React from 'react';

export class ProductRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  };
}