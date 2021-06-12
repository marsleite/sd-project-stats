import React,  { Component } from 'react';
import { Loading } from '../components'
import DestinyStats from './DestinyStats';

class DestinyList extends Component {
  constructor() {
    super();
    this.state = {
      stats: undefined,
      diplayUser: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.gettingBungieApi();
  }

  // /Destiny2/1/Account/4611686018431279085/Stats/

  async gettingBungieApi() {
    this.setState(
      { loading: true },
      async () => {
        const API_URL = 'https://www.bungie.net/platform/Destiny2/1/Account/4611686018431279085/Stats/'
        const API_NAME = 'https://www.bungie.net/platform/User/GetBungieNetUserById/20379188/'
        const header = {
          method: 'GET',
          headers: {
            'X-API-KEY': '78edd9a48d8e413eb14b187e024d8d9b',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        const data = await fetch(API_URL, header);
        const getName = await fetch(API_NAME, header);
        const response = await data.json();
        const respoName = await getName.json();
        this.setState({
          stats: response,
          displayUser: respoName,
          loading: false,
        })
      }
    )
  }

  render() {
    const { stats, loading, displayUser } = this.state;
    if (loading) return <Loading />
    console.log(displayUser)
    const { mergedAllCharacters } = Object.entries(stats)[0][1]
    const { results: { allPvP: { allTime } } } = mergedAllCharacters;
    const { Response: { displayName } } = displayUser;
    return (
      <div className="App-header">
        <h2>{ displayName }</h2>
        <DestinyStats stats={ allTime } />
      </div>
    )
  }
}

export default DestinyList;