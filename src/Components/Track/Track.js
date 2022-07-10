import React from 'react';
import './Track.css';

const Track = (title, artist, album) => {
  let isRemoval = true;

  const renderAction = (isRemoval) => {
    return (
      <button className="Track-action">
        {isRemoval ? '-' : '+'}
      </button>
      )
  }
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3> {title} </h3>
        <p> {artist} | {album} </p>
      </div>
      {renderAction(isRemoval)}
    </div>
  )
}

export default Track;