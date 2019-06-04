import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/";
import Error404 from "../error/error-404";
import './random-planet.css';

export default class RandomPlanet extends Component {
  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 7000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
constructor(){
super();
   
 this.swapiService = new SwapiService();
    
 this.state = {
  planet: {},
  loading: true,
  error: false
 };

this.onPlanetLoaded = (planet) =>{
  this.setState({
    planet,
    loading: false,
    error: false
  });
};

this.onError = (err) => {
this.setState({
  loading: false,
  error: true
});
};

 this.updatePlanet = () => {
   const id = Math.floor(Math.random()*18) + 2;
   this.swapiService
   .getPlanets(id)
   .then(this.onPlanetLoaded)
   .catch(this.onError);
 };

 
}

  render() {
    const { planet, loading, error } = this.state;

    const checkData = !(loading || error);

    const errorMess = error ? <Error404/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = checkData ? <PlanetView  planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded mx-4 mb-0">
      {errorMess}
      {spinner}
      {content}
       </div>

    );
  } 
}
const PlanetView = ({planet}) =>{
  const { id, population,
    name, rotationPeriod, diameter } = planet

  return(
<React.Fragment>
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
</React.Fragment>
);
}