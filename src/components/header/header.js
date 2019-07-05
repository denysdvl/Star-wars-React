import React from 'react';

import './header.css';
import { Link } from 'react-router-dom'

const Header = () =>{
return(
       <div className='row px-5 justify-content-lg-left pagination page-item text-info'>
       <h1 className="col-sm-12 col-lg-auto mt-4 ">
       <Link className="text-white" to="/">
          Star DB
        </Link></h1> 
        <ul className='text-info pagination pl-3 row col-sm-12 col-lg-6 mt-4 '>
            <li className="page-item col-xs-12 col-sm-4 col-lg-3 mt-4">
            <h4><Link to="/people/">People</Link></h4>
            </li>
            <li className="page-item col-xs-12 col-sm-4 col-lg-3 mt-4">
            <h4><Link to="/planet/">Planets</Link></h4>
           </li>
            <li className="page-item col-xs-12 col-sm-4 col-lg-3 mt-4">
            <h4><Link to="/starships/">Starships</Link></h4>
            </li>
        </ul>
       </div> 
);
};

export default Header;