import React, { Component } from 'react';
import LeaderBoard from './LeaderBoard';
import SearchBar from './SearchBar';

class DestinyLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      selectedConsole: '1',
      stats: {},
      gamerName: '',
      loading: false,
    };
    this.handleGeneric = this.handleGeneric.bind(this);
    this.addApi = this.addApi.bind(this);
    this.pegando = this.pegando.bind(this)
  }

  handleGeneric({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  async addApi() {
    this.setState({
      loading: false,
    })
    const { searchText, selectedConsole } = this.state
    const API_Name = `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${ selectedConsole }/${ searchText }/`;
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
    this.pegando()
  }
  

  async pegando() {
    const { stats } = this.state
    const data = stats.Response;
    const { displayName, membershipId } = data[0]

    this.setState({
      gamerName: displayName,
      member: membershipId,
      loading: true,
    })
  }

  render() {
    const { searchText, selectedConsole, gamerName, member, loading } = this.state;
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
        <div>
          <h2>{ gamerName }</h2>
          { loading === true ? <LeaderBoard est={ member } /> : <span></span> }
        </div>
      </div>
    )
  }
}

export default DestinyLibrary;