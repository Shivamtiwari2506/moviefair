import React,{useState, useEffect} from 'react'
import instance from '../instance';
import "./Rows.css"


const base_url = "https://image.tmdb.org/t/p/original/";
const Rows = ({joner, fetchUrl}) => {

  const [movies,setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get("https://api.themoviedb.org/3" + fetchUrl);
      setMovies(request.data.results);
      return request;
    } fetchData();
  }, [fetchUrl]);

  return (
    <div className='rows'>
      <h2>{joner}</h2>
      <div className="row__posters">
        {movies?.map((movie) => (

          <img
            className="row__poster"
            key={movie.id}
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          />

        ))}
      </div>
      
    </div>
  )
}

export default Rows