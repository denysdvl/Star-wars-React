import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {

  render() {
    return (
      <div className="random-planet jumbotron rounded mx-4">
       <div className="container  row">
        <div className="col-sm-12 col-md-auto"><img className="planet-image rounded d-block"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
             </div>
        
         <div className="col-sm-12 col-md-auto">
          <h4>Planet Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>123124</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>
     </div>

    );
  }
}