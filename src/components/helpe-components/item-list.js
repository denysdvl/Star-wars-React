import React from 'react';

import {
    wrappingDate,
    withChildFunction,
    WrappedSwapiService
} from '../hoc-data';
import ItemList from '../item-list'

const mapPlanetsMethodsToProps = (swapiService) => {
    return{
         getData: swapiService.getAllPlanets
    } 
}
const mapStarshipsMethodsToProps = (swapiService) => {
    return{
         getData: swapiService.getAllStarships
    } 
}
const mapPeopleMethodsToProps = (swapiService) => {
    return{
         getData: swapiService.getAllPeople
    } 
}

const renderName = ({name}) => <span> { name} </span>;

const PersonList = WrappedSwapiService(mapPeopleMethodsToProps)(
    wrappingDate(
        withChildFunction(renderName)(ItemList)));
const PlanetList = WrappedSwapiService(mapPlanetsMethodsToProps)(
    wrappingDate(
        withChildFunction(renderName)(ItemList)));
const StarshipsList = WrappedSwapiService(mapStarshipsMethodsToProps)(
    wrappingDate(
        withChildFunction(renderName)(ItemList)));

    export {
    PersonList,
    PlanetList,
    StarshipsList
};