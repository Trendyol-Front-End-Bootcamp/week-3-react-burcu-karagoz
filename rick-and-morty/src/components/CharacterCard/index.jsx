import React from 'react';
import { Link } from "react-router-dom";

import "./styles.css"

export const CharacterCard = ({character}) => {
  const { id, image, name } = character;

  return(
    <Link to={`/character/${id}`}>
      <div className="character">
        <figure>
          <img src={image} alt="character-img" />
          <figcaption>
              {name}
          </figcaption>
        </figure>
        <p className="character-info">More Details</p>
      </div>
    </Link >
  )
}
