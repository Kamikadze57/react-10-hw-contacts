import { Component } from "react";

class Filter extends Component {
  render() {
    const { filterValue, onFilterChange } = this.props;

    return (
      <div className="filter_box">
        <label className="filter_label">
          <p>Find by name</p>
          <input 
            className="filter_input" 
            type="text" 
            value={filterValue} 
            onChange={onFilterChange}
          />
        </label>
      </div>
    );
  }
}

export default Filter;