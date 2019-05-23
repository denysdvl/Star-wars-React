import React from 'react';

import './error-404.css';
import errorGif from './error-404.gif';

const Error404 = () => {
  return (
    <div className="container  row">
    <div className="col-sm-12 col-md-auto">
    <img src={errorGif} alt="error gif" className="video-error"/>
   </div>
   <div className="col-sm-12 col-md-auto"
    className="star-wars">
   <span className="mt-5 ml-3">
        something has gone terribly wrong to the planet <br/>
        (but we already sent droids to deal with this.)
      </span>
      </div>
    </div>
);
};

export default Error404;