import React from 'react';

import './item-detalls.css';

const Record = ({item, field, label}) => {
  return(
    <li className="list-group-item">
    <span className="term">{label}</span>
    <span> {item[field]}</span>
  </li>
  )
}

const ItemViev = ({item, imageUrl, bodyItem }) => {
  const { name} = item;
    return (
  <div className='row no-gutters'>
          <div className="col-md-4 col-sm-12 p-2">
               <img  alt="character"
                src={imageUrl} 
              className="card-img item-image rounded"/>
          </div>
      <div className="col-md-8 col-sm-12">
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
         {
           React.Children.map(bodyItem, (chilld)=>{
             return React.cloneElement(chilld, {item})
           })
         }
        </ul>
      </div>
      </div>
      </div>
  );
}
export{
  Record,
  ItemViev
};
