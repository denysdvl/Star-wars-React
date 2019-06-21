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

const PersonList = WrappedSwapiService(wrappingDate(
    withChildFunction(ItemList, renderName)),
    mapPeopleMethodsToProps);
const PlanetList = WrappedSwapiService(wrappingDate(
    withChildFunction(ItemList, renderName)),
    mapPlanetsMethodsToProps);
const StarshipsList = WrappedSwapiService(wrappingDate(
    withChildFunction(ItemList, renderName)),
    mapStarshipsMethodsToProps);


    export {
    PersonList,
    PlanetList,
    StarshipsList
};