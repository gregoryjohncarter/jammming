import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

const Tracklist = (props) => {
  return (
    <div className="TrackList">
      {props.searchResults && props.searchResults.map((track) => {
        return (
          <Track key={track.id} title={track.title} artist={track.artist} album={track.album}/>
        )
        })
      }
    </div>
  )
}

export default Tracklist;