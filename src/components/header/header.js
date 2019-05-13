import React from 'react';

import './header.css';

const Header = () =>{
return(
       <div className='d-flex'>
       <h1 className="p-4">StarDB</h1> 
        <ul className='text-info pagination'>
            <li className="page-item mr-2 pt-5">
            <h4>Planets</h4>
            </li>
            <li className="page-item mr-2 pt-5">
            <h4> Persons</h4>
           </li>
            <li className="page-item mr-2 pt-5">
            <h4>Starships</h4>
            </li>
        </ul>
       </div> 
);
};

export default Header;