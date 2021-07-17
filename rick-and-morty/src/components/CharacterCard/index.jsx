import React from 'react';
import { Link } from "react-router-dom";

import "./styles.css"

export const CharacterCard = ({character}) => {
  const { id, image, name, species, gender, status, location }= character;

  return(
    <Link to={`/character/${id}`}>
      <div className="character">
        <figure>
          <img src={image} alt="character-img" />
          <figcaption>
              {name}
          </figcaption>
        </figure>
        <ul className="detail-list">
          <li><span className="detail-title">Name</span>:<span>{name}</span></li>
          <li><span className="detail-title">Species</span>:<span>{species}</span></li>
          <li><span className="detail-title">Gender</span>:<span>{gender}</span></li>
          <li><span className="detail-title">Status</span>:<span>{status}</span></li>
          <li><span className="detail-title">Location</span>:<span>{location.name}</span></li>
        </ul>
        <p className="character-info">More Details</p>
      </div>
    </Link >
  )
}
