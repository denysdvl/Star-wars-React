import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PersonPage, StarshipsPage, PlanetPage} from '../pages'
import ErrorWrapping from "../error/error-wrapping"
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { StarshipsDetalls } from '../helpe-components'
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
};

  render(){
      const planet = this.state.showRandomPlanet ?
      <RandomPlanet updateInterval={5000}/> : null;

  return (
<ErrorWrapping>
  <SwapiServiceProvider value={this.swapiService}>
    <Router>
    <Header/>
    { planet }
  <button
    className="m-4 btn btn-warning btn-lg"
    onClick={this.toggleRandomPlanet}>
    Toggle Random Planet
    </button>
    <Switch>
    < Route path='/' 
            render={() =><h2 className='d-flex justify-content-center'>Welcome to StarDB</h2>}
            exact/>
    < Route path='/people/:id?' component={PersonPage}/>
    < Route path='/starships/' exact component={StarshipsPage}/>
    < Route path='/planet/' component={PlanetPage}/>
    < Route path='/starships/:id'
    render={({match})=> {
      const { id } = match.params;
    return <StarshipsDetalls idItem={id} />
    }}/>
    <Redirect to="/"/>
    </Switch>
    </Router>
    
</SwapiServiceProvider>
</ErrorWrapping>);
  };
};
