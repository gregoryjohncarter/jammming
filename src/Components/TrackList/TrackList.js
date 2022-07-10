import React from 'react';
import './TrackList.css';

const Tracklist = (searchResults) => {
  return (
    <div className="TrackList">
      {searchResults && searchResults.map((track) => {
        <Track key={track.id} title={track.title} artist={track.artist} album={track.album}/>
        })
      }
    </div>
  )
}

export default Tracklist;