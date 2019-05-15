import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from "../item-list";
import PersonDetalls from "../person-detalls";

export default class App extends Component {
  render(){
      return (
          <div>
              <Header/>
              <RandomPlanet/>
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
