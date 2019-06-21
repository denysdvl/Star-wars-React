import React from 'react';

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

export default Row;