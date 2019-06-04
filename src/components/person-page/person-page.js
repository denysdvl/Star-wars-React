import React, { Component } from 'react';

import ItemList from "../item-list";
import PersonDetalls from "../person-detalls";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import "./person-page.css"

export default class PersonPage extends Component {
constructor(){
    super();
    this.swapiService = new SwapiService();
    this.state = {
        hasError: false,
        idItems: 1,
       
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
        const { idItems, hasError } = this.state;
        if (hasError) {
            return <ErrorIndicator/>
            }
        return(
            <div className="row mx-2">
             
            <div className="col-xs-12 col-lg-6 pb-4">
            <ItemList onItemSelected={this.onIdItems}
            getItems={this.swapiService.getAllPeople}/>
        </div>
            <div className="col-xs-12 col-lg-6 ">
            <PersonDetalls idPerson={idItems}/>
            </div>
             </div>
              
        );
    }
}