import React, { Component } from 'react';

class DestinyStats extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { stats } = this.props
    const { activitiesEntered: { basic: { displayValue } } } = stats;
    const wins = stats.activitiesWon.basic.displayValue;
    const kills = stats.kills.basic.displayValue;
    const assists = stats.assists.basic.displayValue;
    const deaths = stats.deaths.basic.displayValue;
    const kdr = stats.killsDeathsRatio.basic.displayValue;
    return (
      <ul>
          <li>Games: { displayValue }</li>
          <li>Win: { wins }</li>
          <li>Kills: { kills }</li>
          <li>Assists: { assists }</li>
          <li>Deaths: { deaths }</li>
          <li>K/D: { kdr }</li>
      </ul>
    )
  }
}

export default DestinyStats;