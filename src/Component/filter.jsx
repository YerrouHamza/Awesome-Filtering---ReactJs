import React, { useEffect } from 'react';


function Filter({popular, filterPopular, setFilterPopular, genre, setGenre}) {
    useEffect(() => {
        if(genre === 0){
            setFilterPopular(popular);
            return;
        }
        const filtred = popular.filter((movie) => 
            movie.genre_ids.includes(genre)    
        );
        setFilterPopular(filtred);
    }, [genre]);

    return <div className='moviesFilter__filter'>
        <button className={genre == 0 ? 'active' : null} onClick={() => setGenre(0)}>All</button>
        <button className={genre == 28 ? 'active' : null} onClick={() => setGenre(28)}>Action</button>
        <button className={genre == 35 ? 'active' : null} onClick={() => setGenre(35)}>Comedy</button>
        <button className={genre == 16 ? 'active' : null} onClick={() => setGenre(16)}>Animation</button>
    </div>;
}


export default Filter;