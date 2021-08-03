import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from "../../context/appContext";
import { CharacterList } from '../../components/CharacterList';
import { Search } from '../../components/Search';
import { NoResult } from '../../pages/NoResult';
import { Pagination } from '../../components/Pagination';

import "./styles.css";

export const HomePage = () => {
  const appContext = useContext(AppContext);

  const { characters } = appContext;

  return(
    <div className="container">
      <Search />
      {characters ? <CharacterList /> : <NoResult />}
      {characters && <Pagination />}
    </div>
  )
}
