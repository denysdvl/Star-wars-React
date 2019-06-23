import React from 'react';
import { WrappingDetalls } from "../hoc-data";
import { WrappedSwapiService } from '../hoc-data'
import {Record} from "../item-detalls/item-detalls";;

const PersonDetalls = (props) => {
         return(
    <WrappingDetalls {...props} >
    <Record field="gender" label="Gender:"/>
    <Record field="birthYear" label="Birth Year:"/>
    <Record field="eyeColor" label="Eye Color:"/>
    </WrappingDetalls>
         );
        };
const mapMethodsToProps = (swapiService) => {
     return{
          imageUrl: swapiService.getImgPerson,
          getItems: swapiService.getPerson
     } 
}

export default WrappedSwapiService(mapMethodsToProps)(PersonDetalls);