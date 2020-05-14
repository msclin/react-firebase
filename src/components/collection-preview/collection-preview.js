import React from 'react';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ items, title }) => (
  <div className='collection-preview'>
    <h1 className='title'>{ title.toUpperCase() }</h1>
    <div className='preview'>
      {
        items
          .filter((_, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={ id } { ...otherItemProps }/>
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;