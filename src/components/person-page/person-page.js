import React, { Component } from 'react';

import ItemList from "../item-list";
import ItemDetalls, {Record} from "../item-detalls/item-detalls";
import SwapiService from "../../services/swapi-service";
import Row from "../row-left,right"
import ErrorWrapping from "../error/error-wrapping"
import "./person-page.css"


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
        const { idItems} = this.state;
        const {getPerson , getStarships, getImgPerson, getImgStarships} = this.swapiService
        const itemList = (
            <ItemList onItemSelected={this.onIdItems}
            getItems={this.swapiService.getAllPeople}
            renderItem={({name, birthYear}) => `${name} (${birthYear})`}/>
        );
        const personDetalls = (
            <ErrorWrapping>
            <ItemDetalls
            idItem={idItems}
             getItems={getPerson}
             imageUrl={getImgPerson}>
                 <Record field="gender" label="Gender:"/>
                 <Record field="birthYear" label="Birth Year:"/>
                 <Record field="eyeColor" label="Eye Color:"/>
             </ItemDetalls>
            </ErrorWrapping>
            
        );
        const starshipDetalls = (
            <ErrorWrapping>
            <ItemDetalls
            idItem={idItems}
             getItems={getStarships}
             imageUrl={getImgStarships}>
                 <Record field="model" label="Model:"/>
                 <Record field="manufacturer" label="Manufacturer:"/>
                 <Record field="starshipClass" label="Cargo Capacity:"/>
             </ItemDetalls>
            </ErrorWrapping>
        );
       
        return(
            <ErrorWrapping>
              <Row left={starshipDetalls} right={personDetalls}/>  
            </ErrorWrapping>     
        );
    }
}