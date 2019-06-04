import React, { Component } from 'react';

import './item-list.css';

import Spinner from "../spinner/";

export default class ItemList extends Component {

  constructor(){
    super();
 
    this.state = {
      itemList: null
    };
    this.updataPerson = () =>{
      const { getItems } = this.props;
      getItems().then((itemList) => {
        this.setState({
          itemList
        });
      });
  };
  }
  componentDidMount(){
    this.updataPerson();
  }
  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item list-group-item-action"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
 
}
