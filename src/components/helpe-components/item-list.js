import React from 'react';

import {
    wrappingDate
} from '../hoc-data';
import SwapiService from "../../services/swapi-service";
import ItemList from '../item-list'

const swapiService = new SwapiService();

const {
    getAllPlanets,
    getAllStarships,
    getAllPeople
} = swapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
            {fn}
          </Wrapped>
        )
    };
};
const renderName = ({name}) => <span> { name} </span>;

const PersonList = wrappingDate(
    withChildFunction(ItemList, renderName),
    getAllPeople);
const PlanetList = wrappingDate(
    withChildFunction(ItemList, renderName),
    getAllPlanets);;
const StarshipsList = wrappingDate(
    withChildFunction(ItemList, renderName),
    getAllStarships);;
export {
    PersonList,
    PlanetList,
    StarshipsList
};