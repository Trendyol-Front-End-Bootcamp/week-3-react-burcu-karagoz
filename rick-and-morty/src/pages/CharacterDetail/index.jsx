import React, { useEffect, useContext} from 'react';
import { CharacterDetailCard } from '../../components/CharacterDetailCard';

import { AppContext } from "../../context/appContext";

import './styles.css';

export const CharacterDetail = (props) => {

  const appContext = useContext(AppContext);
  const { getCharacter, character } = appContext;

  const getEpisodes = () => {
    const episodes = character.episode.map((ep) => {
          return ep.slice(ep.lastIndexOf('/') + 1);
    })
    return episodes;
  }

  useEffect(() => {
    getCharacter(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    character ? (
      <>
        <a href="/" className="goback-btn">Go Back</a>
        <CharacterDetailCard character={character} episodes={getEpisodes}/>
      </>
    ): null
  );
}


