import React from 'react';

const CollectionItem = ({ id, imageUrl, name, price }) => (
  <div className='collection-item'>
    <img src={ imageUrl }/>
    <div className='collection-footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>
  </div>
);

export default CollectionItem;