import React, {useState} from "react";
import styles from './App.module.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";

function App () {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track 1",
      artist: "Example  Artist 1",
      album: "Example Album 1",
      id: 1,
    },
    {
      name: "Example Track 2",
      artist: "Example Artist 2",
      album: "Example Album 2",
      id: 2,
    },
  ]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 34,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 57,
    },
    {
      name: "Example Playlist Name 3",
      artist: "Example Playlist Artist 3",
      album: "Example Playlist Album 3",
      id: 3,
    },
  ]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  }
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar />
          
          <div className={styles.AppPlaylist}>
            <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
          </div>
        </div>
      </div>
        );
}

export default App;