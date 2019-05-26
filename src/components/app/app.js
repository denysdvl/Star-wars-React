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
        hasError: false,
        idItems: 1
    };

    this.toggleRandomPlanet = () =>{
        this.setState((state) => {
            return {showRandomPlanet: !state.showRandomPlanet};
        });
    };
    this.componentDidCatch = () => {
        this.setState({ hasError: true });
      };
      this.onIdItems = (id) => {
        this.setState(() => {
            return {idItems: id}
        });
      };
}

  render(){

      const { idItems } = this.state;

    if (this.state.hasError) {
        return <div class="row">
        <div class="col-xs-1 center-block">
            <Error404/>
        </div>
      </div>
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
              <ItemList onItemSelected={this.onIdItems}/>
          </div>
              <div className="col-xs-12 col-lg-6 ">
              <PersonDetalls idPerson={idItems}/>
              </div>
               </div>
                
          </div>
          );
  }
}
