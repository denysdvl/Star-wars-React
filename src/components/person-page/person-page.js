import React, { Component } from 'react';

import {Record} from "../item-detalls/item-detalls";
import SwapiService from "../../services/swapi-service";
import Row from "../row-left,right"
import ErrorWrapping from "../error/error-wrapping"
import "./person-page.css"
import { 
    PersonList,
    PlanetList,
    StarshipsList,
    PersonDetalls,
    PlanetDetalls,
    StarshipsDetalls } from '../detalls-components/'


export default class PersonPage extends Component {
    
constructor(){
    super();
    this.swapiService = new SwapiService();
    this.state = {
       idItems: 12
     };

   
      this.onIdItems = (id) => {
        this.setState(() => {
            return {idItems: id}
        });
      };
      
      
}
    render(){
        const { idItems, } = this.state;
        const {getPerson,getStarships, getImgPerson, getImgStarships} = this.swapiService
        const itemList = (
            <PlanetList
        onItemSelected={this.onIdItems}>
        {(i) => ( `${i.name}` )}</PlanetList>
        );
        const personDetalls = (
            <ErrorWrapping>
            <PlanetDetalls idItem={idItems}/>
            </ErrorWrapping>
            
        );
              
        return(
            <ErrorWrapping>
              <Row left={personDetalls} right={itemList}/>  
            </ErrorWrapping>     
        );
    }
}