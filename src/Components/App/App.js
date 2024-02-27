import React, {useState} from "react";
import styles from './App.module.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";

function App () {
  const [searchResults, setSearchResults] = useState('Example Playlist Name');
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState("Exapmle Playlist Track");
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar />
          
          <div className={styles.AppPlaylist}>
            <SearchResults userSearchResults={searchResults}/>
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
          </div>
        </div>
      </div>
        );
}

export default App;