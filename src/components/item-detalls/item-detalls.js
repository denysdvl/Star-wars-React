import React, { Component } from 'react';

import './item-detalls.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import Error404 from "../error/error-404";
const Record = ({item, field, label}) => {
  return(
    <li className="list-group-item">
    <span className="term">{label}</span>
    <span> {item[field]}</span>
  </li>
  )
}
export{
  Record
};

export default class ItemDetalls extends Component {
  componentDidMount(){
    setTimeout(this.updateItem(),4000);
  }
  componentDidUpdate(prevProps){
    if(this.props.idItem!== prevProps.idItem){
      this.setState({loading: true});

     setTimeout(this.updateItem(),4000);
   }
  }
  constructor(){
  super();

  this.swapiService = new SwapiService();

  this.state = {
    item: null,
    image: null,
    loading: true,
    error: false
  };
  this.onItemLoaded = (item) =>{
    const { imageUrl} = this.props;
    this.setState({
      item,
      image: imageUrl(item),
      loading: false,
      error: false
    });
  };
  
  this.onError = (err) => {
  this.setState({
    loading: false,
    error: true
  });
  };
  this.updateItem = () => {
    const { idItem, getItems} = this.props;
    if (!idItem) {
      return;
    }
    getItems(idItem)
    .then(this.onItemLoaded)
      .catch(this.onError);
  };
}

  render() {
   
const {item, error, loading, image} = this.state;
  const checkData = !(loading || error);

    const errorMess = error ? <Error404/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = checkData ? <ItemViev item={item} 
    imageUrl={image}
    bodyItem = {this.props.children}/> : null;

    return(
  <div className="card item-detalls">
  {errorMess}
  {spinner}
  {content}
  </div>
)
   
  }
}
const ItemViev = ({item, imageUrl, bodyItem }) => {
  const {  name} = item;
    return (
  <div className='row no-gutters'>
          <div className="col-md-4 col-sm-12 p-2">
               <img  alt="character"
                src={imageUrl} 
              className="card-img item-image rounded"/>
          </div>
      <div className="col-md-8 col-sm-12">
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
         {
           React.Children.map(bodyItem, (chilld)=>{
             return React.cloneElement(chilld, {item})
           })
         }
        </ul>
      </div>
      </div>
      </div>
  );
}