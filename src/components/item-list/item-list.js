import React from 'react';

import {  wrappingDate } from '../hoc-data';
import SwapiService from "../../services/swapi-service";
import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item list-group-item-action"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default wrappingDate(ItemList, getAllPeople);