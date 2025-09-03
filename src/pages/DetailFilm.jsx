import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import '../styles/detailFilm.css'

const DetailFilm = () => {
    const navigate = useNavigate()
    const param = useLoaderData()
    console.log(param)
    const title = param.Title
    console.log(title)

    function beliTiket(){
        navigate('/belitiket', {state : {title}})
    }

    if (param.Response === "False") {
    return <p className="error">Film tidak ditemukan</p>;
  }
  return (
    <div className="detail-container">
      <div className="poster">
        <img src={param.Poster} alt={param.Title} />
      </div>
      <div className="info">
        <h1>{param.Title} <span>({param.Year})</span></h1>
        <p><strong>Genre:</strong> {param.Genre}</p>
        <p><strong>Durasi:</strong> {param.Runtime}</p>
        <p><strong>Director:</strong> {param.Director}</p>
        <p><strong>Aktor:</strong> {param.Actors}</p>
        <p><strong>Rating:</strong> ⭐ {param.imdbRating} / 10 ({param.imdbVotes} votes)</p>
        <p><strong>Plot:</strong> {param.Plot}</p>
        <p><strong>Bahasa:</strong> {param.Language}</p>
        <p><strong>Produksi:</strong> {param.Production}</p>
        {param.BoxOffice && <p><strong>Box Office:</strong> {param.BoxOffice}</p>}
        <button className="btn-beli" onClick={beliTiket}>🎟️ Beli Tiket</button>
      </div>
    </div>
  );
}

export default DetailFilm
