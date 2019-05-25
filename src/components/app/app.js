import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from "../item-list";
import PersonDetalls from "../person-detalls";
import Error404 from "../error-404/";

export default class App extends Component {
constructor(){
    super();
    this.state = {
        showRandomPlanet: true,
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
    if (this.state.hasError) {
        return <Error404/>
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
              <div className="row mx-2">
             
              <div className="col-xs-12 col-lg-6 pb-4">
              <ItemList/>
          </div>
              <div className="col-xs-12 col-lg-6 ">
              <PersonDetalls/>
              </div>
               </div>
                
          </div>
          
      );
  }

}
