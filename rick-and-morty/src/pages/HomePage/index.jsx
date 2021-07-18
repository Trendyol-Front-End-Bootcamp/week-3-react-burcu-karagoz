import React, { useContext } from 'react';

import { AppContext } from "../../context/appContext";
import { CharacterList } from '../../components/CharacterList';
import { Search } from '../../components/Search';
import { NoResult } from '../../pages/NoResult';


import "./styles.css";

export const HomePage = () => {
 
  const page = 1;

  const appContext = useContext(AppContext);

  const { getCharacters, characters } = appContext;

  return(
    <div className="container">
      <Search />
      {characters ? <CharacterList /> : <NoResult />}
      <div className="btn-container">
        <button onClick={()=> getCharacters(page<=0 ? 1 : page-1)}>prev</button>
        <button onClick={()=> getCharacters(page+1)}>next</button>
      </div>
    </div>
  )
}


