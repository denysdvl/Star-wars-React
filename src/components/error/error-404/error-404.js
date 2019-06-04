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
         Something went wrong in the universe  <br/>
        (but we've already sent droids to work it out.)
      </span>
      </div>
    </div>
);
};

export default Error404;