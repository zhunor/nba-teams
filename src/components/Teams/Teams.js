import React, { Component } from 'react';
import axios from 'axios';

import TeamCard from '../TeamCard/TeamCard'
import tenor from '../../assets/tenor.gif'

class Teams extends Component {

  constructor() {
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:4000/api/teams'
    if (process.env.REACT_APP_STAGE === 'dev') {
      url = 'https://nba-proxy-api.herokuapp.com/api/teams'
    }
    axios.get(url)
      .then(response => {
        let teamsResponse = {};
        if (response.status === 200) {
          teamsResponse = JSON.parse(response.data.data)
        }

        this.setState({ teams: teamsResponse.data })
      })
  }

  chunk = (arr, len) => {

    const chunks = [];
    let i = 0;
    const n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }

    return chunks;
  }

  render() {

    const { teams } = this.state;
    const rows = this.chunk(teams, 4);

    if (teams.length) {
      return (
        <div className="container">
          {
            rows.map((row) =>
              <div className="columns">
                {
                  row.map(team => (
                    <TeamCard
                      abbreviation={team.abbreviation}
                      conference={team.conference}
                      fullName={team.full_name}
                      key={team.abbreviation} />
                  ))
                }
              </div>
            )
          }
        </div>
      );
    }


    // Loading 
    return (
      <React.Fragment>
        <div className="center-children">
          <img src={tenor} alt="" />
        </div>
      </React.Fragment>
    )


  }
}

export default Teams;
