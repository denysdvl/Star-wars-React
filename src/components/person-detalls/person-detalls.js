import React, { Component } from 'react';

import './person-detalls.css';

export default class PersonDetalls extends Component {

  render() {
    return (
    <div className="card person-detalls">
        <div className='row no-gutters'>
            <div className="col-md-4 col-sm-12 p-2">
                 <img alt="..." src="https://starwars-visualguide.com/assets/img/characters/3.jpg" 
                className="card-img person-image  rounded"/>
            </div>
        <div className="col-md-8 col-sm-12">
        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
        </div>
        </div>
    </div>
        
        
    
    );
  }
}