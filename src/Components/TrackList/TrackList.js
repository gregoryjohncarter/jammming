import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

const Tracklist = (props) => {
  return (
    <div className="TrackList">
      {props.searchResults && props.searchResults.map((track) => {
        return (
          <Track key={track.id} title={track.title} artist={track.artist} album={track.album} onAdd={props.onAdd} onRemove={props.onRemove} track={track} isRemoval={false}/>
        )
      })}
      {props.playlistTracks && props.playlistTracks.map((track) => {
        return (
          <Track key={track.id} title={track.title} artist={track.artist} album={track.album} onRemove={props.onRemove} track={track} isRemoval={true}/>
        )
      })}
    </div>
  )
}

export default Tracklist;