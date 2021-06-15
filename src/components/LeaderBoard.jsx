import React, { Component } from 'react'

class LeaderBoard extends Component {
  constructor() {
    super();

    this.state = {
      estatistica: {},
    }
  }

  componentDidMount() {
    this.gettingLeader()
  }

  async gettingLeader() {
    const { est } = this.props
    const API_LEADER = `https://www.bungie.net/Platform/Destiny2/1/Account/${ est }/Stats/?groups=101`;
    const header = {
      method: 'GET',
      headers: {
        'X-API-KEY': '78edd9a48d8e413eb14b187e024d8d9b',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const leaderBoardDestiny = await fetch(API_LEADER, header)
    const response = await leaderBoardDestiny.json()
    this.setState({
      estatistica: response,
    })
    this.atualizandoStats()
  }

  async atualizandoStats() {
    const { estatistica } = this.state
    const data = estatistica.Response
    const { mergedAllCharacters: { results: { allPvP: { allTime } } } } = data
    const won = allTime.activitiesWon.basic.displayValue

    this.setState({
      wins: won,
    })
  }

  render() {
    const { wins } = this.state;
    return (
      <div>
        <span><b>Vitórias no crisol:</b> { wins }</span>
      </div>
    )
  }
}

export default LeaderBoard;