import React from 'react';

import './error-indicator.css';
import errorPng from './error-indicator.png';


const ErrorIndicator = () => {
  return (
    <div className="justify-content-center error-indicator">
    <img src={errorPng} alt="error png" className="video-error"/>
    <span className="star-wars">
         Something went wrong in the universe  <br/>
        (but we've already sent droids to work it out.)
      </span>
      </div>
    
);
};

export default ErrorIndicator;