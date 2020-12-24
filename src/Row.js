import React, {useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';





function Row ({title, fetchUrl}) {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    },[fetchUrl])


    return (
        <div className="wrapper">
            <h2 style={{marginLeft:'20px',marginTop:'10px'}}>{title}</h2>
        <div className="mainRow">
            {movies.map(
                (movie)=>{
                    return <LazyLoadImage key={movie.id}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.name} 
                            className="poster1"
                            effect="blur"/>
                }
            )}
        </div>
        </div>
    )
}

export default Row;