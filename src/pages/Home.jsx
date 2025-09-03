import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import '../styles/home.css'
import { Link } from "react-router-dom";

const Home = () => {
  const [film, setFilm] = useState("Marvel");
  const [hasilFilm, setHasilFilm] = useState({Search : []});
  const [error,setError] = useState('')
  const [hasSearch,setHassearch] = useState(false)
  const [pembukaan,setPembukaan] = useState(true)

  function cariFilm(value) {
    setFilm(value);
    setHassearch(true)
    setPembukaan(false)
    
  }

  useEffect(() => {
  if (!film) return;

  fetch(`https://www.omdbapi.com/?s=${film}&apikey=758cc45e`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "False") {
        setHassearch(false)
        console.log(data)
        throw new Error(`tidak di temukan film , dari pencarian : ${film}`); // misalnya "Movie not found!"
      }
      setHasilFilm(data);
      setError(""); // reset error
    })
    .catch((err) => setError(err.message));
}, [film]);


console.log(hasilFilm.Search)



  return (
    <div className="home-container">
      {pembukaan && <h2>Cari Film Favorit anda</h2>}
      <Search cariFilm={cariFilm} />
      {pembukaan && <h4>Film yang sedang Tending : {film}</h4>}

      {hasSearch && (
        <p>
          Ditemukan {hasilFilm.Search.length} film, dari pencarian "{film}"
        </p>
      )}

      {error && <p className="error-message">{error}</p>}

      <div className="film-list">
        {!error &&
          hasilFilm.Search.map((item) => (
            <div className="film-card" key={item.imdbID}>
              <img src={item.Poster} alt={item.Title} />
              <div className="film-info">
                <h4>{item.Title}</h4>
                <p>{item.Year}</p>
              </div>
              <Link to={`film/${item.imdbID}`}><button>Lihat Detail Film</button></Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
