import React, { Component } from 'react'
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      onSelectedConsoleChange,
      selectedConsole,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="ctl">
            <input 
              name="searchText"
              onChange={ onSearchTextChange }
              type="text"
              value={ searchText }
              placeholder="gamertag ou psnID"
            />
            <label>
              <select
                name="selectedConsole"
                onChange={ onSelectedConsoleChange }
                value={ selectedConsole }
              >
                <option value="1">Xbox</option>
                <option value="2">PSN</option>
                <option value="3">Steam</option>
              </select>
            </label>
          </label>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSelectedConsoleChange: PropTypes.func.isRequired,
  selectedConsole: PropTypes.string.isRequired,
};

export default SearchBar;