import React, { useEffect, useContext } from 'react';

import { AppContext } from "../../context/appContext";
import { CharacterCard } from '../CharacterCard';

import './styles.css';

export const CharacterList = () => {
  const appContext = useContext(AppContext);

  const { getCharacters, characters } = appContext;

  useEffect(() => {
    getCharacters(1);
  }, []);

  return (
    <ul className="character-list">
      {characters.map(item => {
        return (<CharacterCard key={item.id} character={item} />)
      })}
    </ul>
  );
}
