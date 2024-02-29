import React from "react";
import styles from './Track.module.css';

function Track (props) {
    function renderAction() {
      
      function passTrack() {
        props.onAdd(props.track);
      }
    
      function passTrackToRemove() {
        props.onRemove(props.track);
      }

        if (props.isRemoval) {
          return (
            <button className="Track-action">
              -
            </button>
          );
        } else {
          return (
            <button className="Track-action">
              +
            </button>
          );
        };
      };
    return (
      <div className={styles.Track}>
        <div className={styles.TrackInformation}>
          <h3>{props.track.name}</h3>
          
          <p>{props.track.artist} | {props.track.album}</p>
        </div>
        {renderAction()}
      </div>
    );
}

export default Track;