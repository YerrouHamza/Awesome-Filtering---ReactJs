import React from "react";

/* import Motion animation */
import { motion } from 'framer-motion';

const Movise = ({movies}) => {
    
    return <>
        <img 
            className="moviesFilter__popular__movie--image" 
            src={'https://image.tmdb.org/t/p/w500' + movies.backdrop_path } 
            alt={'Image for ' + movies.title + ' Movie'}
            title={movies.title} 
        />
        <div className="moviesFilter__popular__movie--title">
            <h2>{movies.title}</h2>
            <div>{movies.vote_average} <span>/10</span> </div>
        </div>
    </>
}

export default Movise;