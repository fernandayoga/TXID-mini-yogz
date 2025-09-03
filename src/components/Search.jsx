import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/search.css";

const Search = (props) => {
  const [Search, setSearch] = useState("");
  // console.log(Search)

  // useEffect(()=> {
  //     fetch(`http://www.omdbapi.com/?s=${Search}&apikey=758cc45e`)
  //     .then((res) => res.json())
  //     .then((film)=> console.log(film))
  //     .catch((err)=> console.log(err))
  // }, [Search])

  function kirimSearch() {
    props.cariFilm(Search);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Cari film anda..."
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={kirimSearch}
        className="search-button"
        disabled={!Search.trim()}
      >
        Cari
      </button>
    </div>
  );
};

export default Search;
