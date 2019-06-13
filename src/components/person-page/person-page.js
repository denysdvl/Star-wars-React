import React, { Component } from 'react';

import Row from "../row-left,right"
import ErrorWrapping from "../error/error-wrapping"
import "./person-page.css"
import { 
    PersonList,
    PlanetList,
    StarshipsList,
    PersonDetalls,
    PlanetDetalls,
    StarshipsDetalls } from '../helpe-components'

export default class PersonPage extends Component {
    
constructor(){
    super();
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
        const itemList1 = (
            <PersonList
            onItemSelected={this.onIdItems}/>);
        const personDetalls1 = (
            <ErrorWrapping>
            <PersonDetalls idItem={idItems}/>
            </ErrorWrapping>
            
        );

        const itemList12 = (
            <PlanetList
            onItemSelected={this.onIdItems}/>);
        const personDetalls12 = (
            <ErrorWrapping>
            <PlanetDetalls idItem={idItems}/>
            </ErrorWrapping>
            
        );

        const itemList3 = (
            <StarshipsList
            onItemSelected={this.onIdItems}/>);
        const personDetalls3 = (
            <ErrorWrapping>
            <StarshipsDetalls idItem={idItems}/>
            </ErrorWrapping>
            
        );
              
        return(
            <ErrorWrapping>
              <Row left={personDetalls1} right={itemList1}/>  
              <Row left={personDetalls12} right={itemList12}/> 
              <Row left={personDetalls3} right={itemList3}/> 
            </ErrorWrapping>     
        );
    }
}