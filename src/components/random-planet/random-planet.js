import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";

import './random-planet.css';

export default class RandomPlanet extends Component {
 
  constructor(){
  super();
   
 this.swapiService = new SwapiService();
    
 this.state = {
  planet: {}
 };

this.onPlanetLoaded = (planet) =>{
  this.setState({planet});
};

 this.updatePlanet = () => {
   const id = Math.floor(Math.random()*18) + 2;
   this.swapiService
   .getPlanets(id)
   .then(this.onPlanetLoaded);
 };
 
 setInterval(this.updatePlanet,5000);

  }


  render() {
    const { planet: { id, population,
       name, rotationPeriod, diameter } } = this.state;

    return (
      <div className="random-planet jumbotron rounded mx-4">
       <div className="container  row">
        <div className="col-sm-12 col-md-auto">
        <img alt="..." className="planet-image rounded d-block"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
             </div>
        
         <div className="col-sm-12 col-md-auto">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
     </div>

    );
  }
}