import React, { Component } from 'react';
import SearchBar from './SearchBar';

class DestinyLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      selectedConsole: '1',
      stats: undefined,
    };
    this.handleGeneric = this.handleGeneric.bind(this);
    this.addApi = this.addApi.bind(this);
  }

  handleGeneric({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  async addApi() {
    const { searchText } = this.state
    const API_Name = `https://www.bungie.net/Platform/User/SearchUsers/?q=${searchText}`;
    const header = {
      method: 'GET',
      headers: {
        'X-API-KEY': '78edd9a48d8e413eb14b187e024d8d9b',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const getName = await fetch(API_Name, header);
    const responseName = await getName.json()
    this.setState({
      stats: responseName,
    })  
  }

  render() {
    const { searchText, selectedConsole } = this.state;
    return (
      <div>
        <SearchBar 
          searchText={ searchText }
          selectedConsole={ selectedConsole }
          onSearchTextChange={ this.handleGeneric }
          onSelectedConsoleChange={ this.handleGeneric }
        />
        <button
          type="button"
          onClick={ this.addApi }      
        >
          Find
        </button>
      </div>
    )
  }
}

export default DestinyLibrary;