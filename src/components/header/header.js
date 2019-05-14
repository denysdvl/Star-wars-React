import React from 'react';

import './header.css';

const Header = () =>{
return(
       <div className='row px-5 justify-content-lg-left'>
       <h1 className="col-sm-12 col-lg-auto mt-4 "><a className="text-white" href="#">
          Star DB
        </a></h1> 
        <ul className='text-info pagination pl-3 row col-sm-12 col-lg-6 mt-4 '>
            <li className="page-item col-xs-12 col-sm-4 col-lg-3 mt-4">
            <h4><a href="#">People</a></h4>
            </li>
            <li className="page-item col-xs-12 col-sm-4 col-lg-3 mt-4">
            <h4><a href="#">Planets</a></h4>
           </li>
            <li className="page-itemcol-xs-12 col-sm-4 col-lg-3 mt-4">
            <h4><a href="#">Starships</a></h4>
            </li>
        </ul>
       </div> 
);
};

export default Header;