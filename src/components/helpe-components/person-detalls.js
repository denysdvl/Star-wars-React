import React from 'react';
import { WrappingDetalls } from "../hoc-data";
import { WrappedSwapiService } from '../hoc-data'
import {Record} from "../item-detalls/item-detalls";;


const PersonDetalls = ({idItem, swapiService}) => {
const {getImgPerson, getPerson} = swapiService;
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
         );
        };

export default WrappedSwapiService(PersonDetalls);