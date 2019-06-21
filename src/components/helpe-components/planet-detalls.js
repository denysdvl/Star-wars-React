import React from 'react';
import {WrappingDetalls,WrappedSwapiService} from "../hoc-data";
import {Record} from "../item-detalls/item-detalls";



const PlanetDetalls = (props) => {
    return(
    <WrappingDetalls {...props}>
        <Record field="population" label="Population:"/>
        <Record field="climate" label="Climate:"/>
        <Record field="gravity" label="Gravity:"/>
        <Record field="terrain" label="Terrain:"/>
        </WrappingDetalls>
         );};

         const mapMethodsToProps = (swapiService) => {
            return{
                 imageUrl: swapiService.getImgPlanets,
                 getItems: swapiService.getPlanets
            } 
       }

export default WrappedSwapiService(PlanetDetalls, mapMethodsToProps);