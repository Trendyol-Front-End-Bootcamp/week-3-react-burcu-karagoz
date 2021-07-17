import React, { useState, useContext } from "react";
import { AppContext } from "../../context/appContext";

import "./styles.css";

export const Search = () => {
  const appContext = useContext(AppContext);
  const { searchCharacters } = appContext;

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchCharacters({ name, status, gender });
  };

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <label>Name</label>
        <input
          type="search"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter character name"
        />
      </div>
      <div className="input-group">
        <label>Status</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          defaultValue={status}
        >
          <option value="">None</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group">
        <label>Gender</label>
        <select
          onChange={(e) => setGender(e.target.value)}
          defaultValue={gender}
        >
          <option value="">None</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="input-group btn">
        <button>
          <img src="https://img.icons8.com/doodle/48/000000/search--v1.png" alt="search-icon" />  
        </button>
      </div>
    </form>
  );
};