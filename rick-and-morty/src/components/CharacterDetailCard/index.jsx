import React from "react";

import "./styles.css";

export const CharacterDetailCard = ({character, episodes}) => {

  const { name, image, species, gender, status, location, origin }= character;

  return (
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
        <li><span className="info-title">Episodes</span>:
          {episodes().slice(-5).map(episode => <span className="episode" key={episode}>{episode}</span>)}
        </li>
      </ul>
    </div>
  );
};