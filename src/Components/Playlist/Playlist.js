import React from "react";
import styles from './Playlist.module.css';

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <button className={styles.PlaylistSave}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;