import React, {useState} from "react";
import styles from './App.module.css';
import SearchResults from "../SearchResults/SearchResults";

function App () {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track Name 1",
      artist: "Example Track Artist 1",
      album: "Example Track Album 1",
      id: 1,
    },
    {
      name: "Example Track Name 2",
      artist: "Example Track Artist 2",
      album: "Example Track Album 2",
      id: 2,
    },
  ]);
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles.AppPlaylist}>
            <SearchResults userSearchResults={searchResults}/>
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
        );
}

export default App;