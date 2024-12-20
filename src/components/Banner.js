import React, { useState, useEffect } from 'react';
import "./Banner.css"
import instance from '../instance'
import all_requests from '../request' 




const Banner = () => {
   const [movie , setMovie]= useState([])

   useEffect(() => {
    
       async function fetchData() {
        console.log(instance);
           const request = await instance.get('https://api.themoviedb.org/3/authentication');
           setMovie(
               request.data.results[
                   Math.floor(Math.random() * request.data.results.length - 1)
               ]
           );
           return request;
       } fetchData();
   }, []);

  return (
    <div>
       <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">{movie?.overview}</h1>
                </div>
                <div className="banner--fadeBottom" />
            </header>
    </div>
  )
}

export default Banner