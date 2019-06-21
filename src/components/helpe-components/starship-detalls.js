import React from 'react';
import {WrappingDetalls} from "../hoc-data";
import {Record} from "../item-detalls/item-detalls";
import { WrappedSwapiService } from '../hoc-data'

const StarshipsDetalls = (props) => {
    return(
    <WrappingDetalls {...props} >
        <Record field="model" label="Model:"/>
        <Record field="starshipClass" label="Starship Class:"/>
        <Record field="cargoCapacity" label="Cargo Capacity:"/>
        </WrappingDetalls>
         );};

         const mapMethodsToProps = (swapiService) => {
            return{
                 imageUrl: swapiService.getImgStarships,
                 getItems: swapiService.getStarships
            } 
       }

export default WrappedSwapiService(StarshipsDetalls, mapMethodsToProps);
