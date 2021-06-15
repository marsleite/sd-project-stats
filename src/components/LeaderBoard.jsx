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
  }

  render() {

    return (
      <div>hauhauh</div>
    )
  }
}

export default LeaderBoard;