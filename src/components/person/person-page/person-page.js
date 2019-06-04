import React, { Component } from 'react';

import ItemList from "../../item-list";
import PersonDetalls from "../person-detalls";
import ErrorIndicator from "../../error/error-indicator";
import SwapiService from "../../../services/swapi-service";
import Row from "../../row-left,right"
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

        const itemList = (
            <ItemList onItemSelected={this.onIdItems}
            getItems={this.swapiService.getAllPeople}
            renderItem={({name, birthYear}) => `${name} (${birthYear})`}/>
        );
        const personDetalls = (
            <PersonDetalls idPerson={idItems}
            />
        );
        if (hasError) {
            return <ErrorIndicator/>
            }
        return(
           <Row left={itemList} right={personDetalls}/>
              
        );
    }
}