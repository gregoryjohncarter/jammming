import React from 'react';
import './Track.css';

const Track = (props) => {
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
        <h3> {props.title} </h3>
        <p> {props.artist} | {props.album} </p>
      </div>
      {renderAction(isRemoval)}
    </div>
  )
}

export default Track;