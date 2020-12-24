
import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css'
import requests from './Requests.js';

function Banner() {
    const[movies, setMovies] = useState([]);

    useEffect (
        () => {
                async function fetchData(){
                    const request = await axios.get(requests.fetchNetflixOriginals);
                    setMovies(request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)
                        ]);
                    return request;
                }
                fetchData();    
        }, []);
    
        

        function truncate(str, n) {
            return str?.length > n ? str.substr(0, n - 1) + "......." : str;
          }

    return(
        <div className="banner1" 
        style={{
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
            )`
          }}>
            <div className="banner2" style={{color:'white'}}>
            <h1><b>{movies.title||movies.name}</b></h1>
            <br />
            <div className="buttons1">
                <button>Play</button>
                <button>My list</button>
            </div>
            <br />
            <p>{truncate(movies?.overview, 150)}</p>
            </div>
            
        </div>
    )
}

export default Banner;