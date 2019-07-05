import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorWrapping from "../error/error-wrapping"
import { StarshipsList} from '../helpe-components'

const StarshipsPage = ({history}) => {  
        return(
            <ErrorWrapping> 
             <StarshipsList 
            onItemSelected={(id) => history.push(id)}/>
            </ErrorWrapping>     
        );
    }
export default withRouter(StarshipsPage);