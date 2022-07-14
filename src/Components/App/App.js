import SearchBar from '../SearchBar/SearchBar.js'
import Playlist from '../Playlist/Playlist.js'
import SearchResults from '../SearchResults/SearchResults.js'
import './App.css';
import { useState } from 'react';
import Spotify from '../../util/Spotify.js';

function App() {
  const [playlistTitle, setPlaylistTitle] = useState('New Playlist');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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

  const updatePlaylistName = (name) => {
    setPlaylistTitle(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);

    Spotify.savePlaylist(playlistTitle, trackUris).then(() => {
      setPlaylistTitle('New Playlist');
      setPlaylistTracks([]);
    });
  }

  const searchValue = (query) => {
    setSearchInput(query);
  }

  const searchQuery = () => {
    Spotify.searchSpotify(searchInput).then(newResults => {
      setSearchResults(newResults);
    })
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={searchQuery} onChange={searchValue}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist playlistTracks={playlistTracks} playlistTitle={playlistTitle} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
