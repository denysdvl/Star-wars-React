import React from 'react';

import './error-404.css';

const Error404 = () => {
  return (
    <div className="container  row">
    <div className="col-sm-12 col-md-auto">
    <iframe src="https://giphy.com/embed/YyKPbc5OOTSQE"
  className="giphy-embed video-error">
   </iframe>
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