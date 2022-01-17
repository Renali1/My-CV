import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "Anglais", xp:1.7},
      {id: 2, value: "Espagnol", xp:0.7},
      {id: 3, value: "Japonais", xp:0.5}
    ],
    countries: [
      {id: 1, value: "Espagne", xp:0},
      {id: 2, value: "Italie", xp:0},
      {id: 3, value: "Allemagne", xp:0},
      {id: 4, value: "Japon", xp:0},

    ]
  }
  render() {
    let {languages, countries} = this.state;
    return (
      <div className="languagesAndCountries">
          <ProgressBar array={languages} className="languagesDisplay" title="Langues" />
          <ProgressBar array={countries} className="countriesDisplay" title="Pays" />
      </div>
    );
  }
};

export default Languages;