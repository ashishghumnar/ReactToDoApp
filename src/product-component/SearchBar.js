import React from 'react';

export class SearchBar extends React.Component {
  constructor(prop) {
   this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange = function (e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render () {
    return (
      <div claass="SearchBar">
          <input type="text" 
                  placeholder="Search Product"
                  onChange= {this.handleFilterTextChange}/>
          <div>
            <input type="checkbox"/>
          </div>
      </div>
    )
  }
}