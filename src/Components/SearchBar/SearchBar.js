import React, {useState} from "react";
import styles from './SearchBar.module.css'

function SearchBar (props) {

  const [term, setTerm] = useState('')

  function passTerm() {
    props.onSearch(term);
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }

    return (
        <div className={styles.SearchBar}>
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={handleTermChange}
          onClick={passTerm}
        />
        <button className={styles.SearchButton} >
          Search
        </button>
      </div>
        );
}

export default SearchBar;