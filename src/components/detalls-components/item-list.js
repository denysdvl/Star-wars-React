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

const PersonList = wrappingDate(ItemList, getAllPeople);
const PlanetList = wrappingDate(ItemList, getAllPlanets);;
const StarshipsList = wrappingDate(ItemList, getAllStarships);;
export {
    PersonList,
    PlanetList,
    StarshipsList
};