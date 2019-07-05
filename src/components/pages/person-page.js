import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from "../row-left,right"
import ErrorWrapping from "../error/error-wrapping"
import { 
    PersonList,
    PersonDetalls, } from '../helpe-components'

const PersonPage = ({history, match}) => {
    
    const { id } = match.params;
        return(
            <ErrorWrapping>
              <Row left={<ErrorWrapping> <PersonDetalls idItem={id}/> </ErrorWrapping>}
            right={<PersonList onItemSelected={(id) => history.push(id)}/>}/>
            </ErrorWrapping>     
        );
    }
    export default withRouter(PersonPage);