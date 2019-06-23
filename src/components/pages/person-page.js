import React, { Component } from 'react';

import Row from "../row-left,right"
import ErrorWrapping from "../error/error-wrapping"
import { 
    PersonList,
    PersonDetalls, } from '../helpe-components'

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
        const itemList = (
            <PersonList
            onItemSelected={this.onIdItems}/>);
        const personDetalls = (
            <ErrorWrapping>
            <PersonDetalls idItem={idItems}/>
            </ErrorWrapping>
            );
        
        return(
            <ErrorWrapping>
              <Row left={personDetalls} right={itemList}/>
            </ErrorWrapping>     
        );
    }
}