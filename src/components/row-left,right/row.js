import React from 'react';
import PropTypes from 'prop-types'

import './row';

const Row =  ({left, right}) =>{
    return(
        <div className="row m-2 ">
         <div className="col-xs-12 col-lg-6 pb-4">
       {left}
    </div>
        <div className="col-xs-12 col-lg-6 ">
       {right}
        </div>
         </div>
          
    );
}
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
  }

export default Row;