import React from 'react';
import {WrappingDetalls} from "../hoc-data";
import {Record} from "../item-detalls/item-detalls";
import { WrappedSwapiService } from '../hoc-data'



const StarshipsDetalls = ({idItem, swapiService}) => {
    const {getImgStarships, getStarships} =swapiService
    return(
    <WrappingDetalls
    imageUrl={getImgStarships}
    idItem={idItem}
    getItems={getStarships}
    >
        <Record field="model" label="Model:"/>
        <Record field="starshipClass" label="Starship Class:"/>
        <Record field="cargoCapacity" label="Cargo Capacity:"/>
        </WrappingDetalls>
         );};
export default WrappedSwapiService(StarshipsDetalls);
