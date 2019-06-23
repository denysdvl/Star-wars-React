import React, { Component } from 'react';

import Row from "../row-left,right"
import ErrorWrapping from "../error/error-wrapping"
import { 
    PlanetList,
    PlanetDetalls, } from '../helpe-components'

export default class PlanetPage extends Component {
    
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
        
        const itemList = (
            <PlanetList
            onItemSelected={this.onIdItems}/>);
        const planetDetalls = (
            <ErrorWrapping>
            <PlanetDetalls idItem={idItems}/>
            </ErrorWrapping>
         );
              
        return(
            <ErrorWrapping>
              <Row left={planetDetalls} right={itemList}/> 
            </ErrorWrapping>     
        );
    }
}