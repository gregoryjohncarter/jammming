const clientID = process.env.REACT_APP_CLIENT_ID;
const redirectUri = "http://localhost:3000";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } 

    let tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    let expiresMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresMatch[1]);

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
      window.location = accessUrl;
    }
  },
  searchSpotify(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (!jsonResponse.tracks) {
        return [];
      }

      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }))
    })
  },
  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}`};
    let userId;

    return fetch('https://api.spotify.com/v1/me', { headers: headers }
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: name })
      }).then(response => response.json() 
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/
        playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackUris })
        });
      })
    })
  }
};

export default Spotify;