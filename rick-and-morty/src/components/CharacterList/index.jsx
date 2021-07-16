import React, { useEffect, useContext } from 'react';

import { AppContext } from "../../context/appContext";
import { CharacterCard } from '../CharacterCard';

import './styles.css';

export const CharacterList = () => {
  const appContext = useContext(AppContext);

  const { getCharacters, characters, page } = appContext;

  useEffect(() => {
    getCharacters(page);
  }, []);

  return (
    <ul className="character-list">
      {characters.map(item => {
        return (<CharacterCard key={item.id} character={item} />)
      })}
    </ul>
  );
}
