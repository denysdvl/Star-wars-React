import React from 'react';
import WrappingDetalls from "../hoc-data/wrapping-detalls";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-detalls/item-detalls";

const swapiService = new SwapiService();

const {
    getPerson,
    getStarships,
    getImgPerson,
    getImgStarships,
    getPlanets,
    getImgPlanets
} = swapiService


const PersonDetalls = ({idItem}) => {
    return(
    <WrappingDetalls
    imageUrl={getImgPerson}
    idItem={idItem}
    getItems={getPerson}
    >
        <Record field="gender" label="Gender:"/>
        <Record field="birthYear" label="Birth Year:"/>
        <Record field="eyeColor" label="Eye Color:"/>
    </WrappingDetalls>)};

const PlanetDetalls = ({idItem}) => {
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
    </WrappingDetalls>)};
const StarshipsDetalls = ({idItem}) => {
    return(
    <WrappingDetalls
    imageUrl={getImgStarships}
    idItem={idItem}
    getItems={getStarships}
    >
        <Record field="model" label="Model:"/>
        <Record field="starshipClass" label="Starship Class:"/>
        <Record field="cargoCapacity" label="Cargo Capacity:"/>
    </WrappingDetalls>)};
export {
    PersonDetalls,
    PlanetDetalls,
    StarshipsDetalls
};