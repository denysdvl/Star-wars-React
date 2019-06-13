import React from 'react';
import {WrappingDetalls} from "../hoc-data";
import {Record} from "../item-detalls/item-detalls";
import { WrappedSwapiService } from '../hoc-data'


const PlanetDetalls = ({idItem, swapiService}) => {
   const {getImgPlanets, getPlanets} =swapiService
    return(
    <WrappingDetalls
    imageUrl={getImgPlanets}
    idItem={idItem}
    getItems={getPlanets}
    >
        <Record field="population" label="Population:"/>
        <Record field="climate" label="Climate:"/>
        <Record field="gravity" label="Gravity:"/>
        <Record field="terrain" label="Terrain:"/>
        </WrappingDetalls>
         );};

export default WrappedSwapiService(PlanetDetalls);