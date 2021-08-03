import React, { useContext, useState } from 'react';

import { AppContext } from "../../context/appContext";

import './styles.css';

export const Pagination = () => {
  const appContext = useContext(AppContext);

  const { getCharacters  } = appContext;

  const [page, setPage] = useState(1);

  const handleClick = (newPage) => {
    setPage(newPage);
    getCharacters(newPage);
  };

  return (
    <div className="buttons-container">
      {page > 1 && <button type="submit" className="prev-btn" onClick={() => handleClick(page-1)}>Prev</button>}
      <button type="submit" className="next-btn" onClick={() => handleClick(page+1)}>Next</button>
    </div>
  );
}
