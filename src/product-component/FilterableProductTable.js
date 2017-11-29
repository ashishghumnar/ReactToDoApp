import React from 'react';

import {SearchBar} from './SearchBar';
import {ProductTable} from './ProductTable';

export class FilterableProductTable extends React.Component {
    constructor(props) {
      this.state = {
        filterText: ''
      };

      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = function(filterText) {
      this.setState({filterText: filterText});
    }

    render () {
      return (
        <div>
          <SearchBar onFilterTextChange={this.handleFilterTextChange}/>
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}/>
        </div>
      )
    }
}