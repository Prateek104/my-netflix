import React from 'react';
import Row from './Row.js';
import Banner from './Banner.js';
import requests from './Requests.js'
import Nav from './Nav.js'


class App extends React.Component{
    render(){
        return (
            <div style={{backgroundColor:'black', color:'white'}}>
                <Nav />
                <Banner />
            <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTopRated}/>
            <Row title="Hottest on the list" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Thrillers" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Suspense" fetchUrl={requests.fetchActionMovies}/>
            </div>
        )
    }
}

export default App;