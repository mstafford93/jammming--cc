import React from "react";
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
        <Tracklist />
      </div>
        );
}

export default SearchResults;