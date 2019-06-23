import React, { Component } from 'react';

import Row from "../row-left,right"
import ErrorWrapping from "../error/error-wrapping"
import {
    StarshipsList,
    StarshipsDetalls } from '../helpe-components'

export default class StarshipsPage extends Component {
    
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
            <StarshipsList
            onItemSelected={this.onIdItems}/>);
        const starshipsDetalls = (
            <ErrorWrapping>
            <StarshipsDetalls idItem={idItems}/>
            </ErrorWrapping>
        );
              
        return(
            <ErrorWrapping> 
              <Row left={starshipsDetalls} right={itemList}/> 
            </ErrorWrapping>     
        );
    }
}