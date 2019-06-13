import React from 'react';
import WrappingDetalls from "../hoc-data/wrapping-detalls";
import {Record} from "../item-detalls/item-detalls";
import { SwapiServiceConsumer } from '../swapi-service-context';


const PersonDetalls = ({idItem}) => {
    return(
 <SwapiServiceConsumer>{
     ({getImgPerson, getPerson}) =>{
         return(
    <WrappingDetalls
    imageUrl={getImgPerson}
    idItem={idItem}
    getItems={getPerson}
    >
    <Record field="gender" label="Gender:"/>
    <Record field="birthYear" label="Birth Year:"/>
    <Record field="eyeColor" label="Eye Color:"/>
    </WrappingDetalls>
         );}
 }
 </SwapiServiceConsumer>
   );};

const PlanetDetalls = ({idItem}) => {
    return(
        <SwapiServiceConsumer>{
            ({getImgPlanets, getPlanets}) =>{
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
         );}
 }
 </SwapiServiceConsumer>
   );};

const StarshipsDetalls = ({idItem}) => {
    return(
        <SwapiServiceConsumer>{
            ({getImgStarships, getStarships}) =>{
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
         );}
 }
 </SwapiServiceConsumer>
   );};
export {
    PersonDetalls,
    PlanetDetalls,
    StarshipsDetalls
};