import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page'
import ErrorWrapping from "../error/error-wrapping"
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
constructor(){
    super();
    this.swapiService = new SwapiService();
    this.state = {
        showRandomPlanet: true,
    };

    this.toggleRandomPlanet = () =>{
        this.setState((state) => {
            return {showRandomPlanet: !state.showRandomPlanet};
        });
    };    
}

  render(){
      const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

      return (
<ErrorWrapping>
<div>
              <Header/>
              { planet }

              <button
            className="m-4 btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
            <PersonPage/>
          </div> 
</ErrorWrapping>
         
          );
  }
}
