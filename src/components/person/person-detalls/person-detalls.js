import React, { Component } from 'react';

import './person-detalls.css';
import SwapiService from "../../../services/swapi-service";
import Spinner from "../../spinner/";
import Error404 from "../../error/error-404";

export default class PersonDetalls extends Component {
  componentDidMount(){
    setTimeout(this.updatePerson(),4000);
  }
  componentDidUpdate(prevProps){
    if(this.props.idPerson != prevProps.idPerson){
      this.setState({loading: true});

     setTimeout(this.updatePerson(),4000);
   }
  }
  constructor(){
  super();

  this.swapiService = new SwapiService();

  this.state = {
    person: null,
    loading: true,
    error: false
  };
  this.onPersonLoaded = (person) =>{
    this.setState({
      person,
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
  this.updatePerson = () => {
    const { idPerson } = this.props;
    if (!idPerson) {
      return;
    }

    this.swapiService
      .getPerson(idPerson)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  };
}

  render() {
   
const {person, error, loading} = this.state;

  const checkData = !(loading || error);

    const errorMess = error ? <Error404/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = checkData ? <PersonViev person={person}/> : null;

    return(
  <div className="card person-detalls">
  {errorMess}
  {spinner}
  {content}
  </div>
)
   
  }
}
const PersonViev = ({person}) => {
  const { id, name, gender,
    birthYear, eyeColor } = person;
  return (
    <React.Fragment>
  <div className='row no-gutters'>
          <div className="col-md-4 col-sm-12 p-2">
               <img  alt="character"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
              className="card-img person-image  rounded"/>
          </div>
      <div className="col-md-8 col-sm-12">
      <div className="card-body">
        <h4>{name} {id}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span> {gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span> {birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span> {eyeColor}</span>
          </li>
        </ul>
      </div>
      </div>
      </div>
      </React.Fragment>
  );
}