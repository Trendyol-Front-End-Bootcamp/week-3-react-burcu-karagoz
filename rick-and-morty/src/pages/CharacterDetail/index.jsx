import React, { useEffect, useContext } from 'react';

import { AppContext } from "../../context/appContext";

import './styles.css';

export const CharacterDetail = (props) => {

  const appContext = useContext(AppContext);
  const { getCharacter, character } = appContext;

  useEffect(() => {
    getCharacter(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  if(character) {
    const { name, image, species, gender, status, location, origin, characterEpisodes }= character;

    return (
      <>
        <a href="/" className="goback-btn">Go Back</a>
        <div className="detail-container">
          <div className="img-container">
            <img src={image} alt="character img"/>
          </div>
          <ul className="info-detail-list">
            <li><span className="info-title">Name</span>:<span>{name}</span></li>
            <li><span className="info-title">Species</span>:<span>{species}</span></li>
            <li><span className="info-title">Gender</span>:<span>{gender}</span></li>
            <li><span className="info-title">Status</span>:<span>{status}</span></li>
            <li><span className="info-title">Location</span>:<span>{location.name}</span></li>
            <li><span className="info-title">Origin</span>:<span>{origin.name}</span></li>
            <li><span className="info-title">Episodes</span>:<span>{characterEpisodes}</span></li>
          </ul>
        </div>
      </>
    )
  } else {
    return null;
  }
}

