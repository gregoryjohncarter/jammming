import React from 'react';
import './Track.css';

const Track = (props) => {
  const renderAction = (isRemoval) => {
    return (
      <button onClick={!isRemoval ? () => { props.onAdd(props.track) } : console.log('test')} className="Track-action">
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
      {renderAction(props.isRemoval)}
    </div>
  )
}

export default Track;