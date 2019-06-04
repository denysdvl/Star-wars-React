import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page'
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetalls from "../person-detalls";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
constructor(){
    super();
    this.swapiService = new SwapiService();
    this.state = {
        showRandomPlanet: true,
        idItems: 1,
        hasError: false
    };

    this.toggleRandomPlanet = () =>{
        this.setState((state) => {
            return {showRandomPlanet: !state.showRandomPlanet};
        });
    };
    this.componentDidCatch = () => {
        this.setState({ hasError: true });
      };
     
}

  render(){
    const { idItems, hasError } = this.state;
    if (hasError) {
        return <ErrorIndicator/>
        }
      const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

      return (
          <div>
              <Header/>
              { planet }
              <button
            className="m-4 btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
            <PersonPage/>
            <div className="row mx-2">
             
            <div className="col-xs-12 col-lg-6 pb-4">
            <ItemList onItemSelected={this.onIdItems}
            getItems={this.swapiService.getAllPlanets}/>
        </div>
            <div className="col-xs-12 col-lg-6 ">
            <PersonDetalls idPerson={idItems}/>
            </div>
             </div>
              
          </div>
          );
  }
}
