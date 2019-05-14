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
              <ItemList/>
              <PersonDetalls/>  
          </div>
          
      );
  }

}
