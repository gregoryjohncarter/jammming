// import logo from './logo.svg';
import SearchBar from '../SearchBar/SearchBar.js'
import Playlist from '../Playlist/Playlist.js'
import SearchResults from '../SearchResults/SearchResults.js'
import './App.css';
import { useState } from 'react';

function App() {
  const searchResultsSample = [
    {
      id: 1,
      title: 'SF to Berlin',
      artist: 'Spencer Brown',
      album: 'Stream of Consciousness'
    }, 
    {
      id: 2,
      title: 'More Than Enough',
      artist: 'Alina Baraz',
      album: 'It Was Divine'
    },
    {
      id: 3,
      title: 'Bleach',
      artist: 'BROCKHAMPTON',
      album: 'SATURATION III'
    }
  ];

  const playlistSample = [
    {
      id: 4,
      title: 'Green Tea (RAC Remix)',
      artist: 'Giraffage',
      album: 'Too Real Remixes'
    }, 
    {
      id: 5,
      title: 'Take it Back',
      artist: 'Logic',
      album: 'Everybody'
    },
    {
      id: 6,
      title: 'Platforms',
      artist: 'M.I.A.',
      album: 'AIM'
    }
  ];

  const [playlistTitle, setPlaylistTitle] = useState('Test Playlist');
  const [searchResults, setSearchResults] = useState(searchResultsSample);
  const [playlistTracks, setPlaylistTracks] = useState(playlistSample);

  const addTrack = (track) => {
    for (let i = 0; i < playlistTracks.length; i++) {
      if (track.id === playlistTracks[i].id) {
        return
      }
    }
    setPlaylistTracks([...playlistTracks, track]);
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((trackID) => {
      return trackID.id !== track.id;
    }));
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist playlistTracks={playlistTracks} playlistTitle={playlistTitle} onRemove={removeTrack}/>
        </div>
      </div>
    </div>
  );
}

export default App;
