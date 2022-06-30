
import './App.css';
import React, {useEffect, useState} from 'react';

/* import Motion animation */
import { motion, AnimatePresence } from 'framer-motion';

/* Get Filter Component */
import Filter from './Component/filter';
/* Get Movie Component */
import Movies from './Component/Movies';



function App() {

  const [popular, setPopular] = useState([]);
  const [filterPopular, setFilterPopular] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const dataMovies = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=638134645d84ac3d9b0017850eddfeaf&language=en-US&page=1');
    const moveis = await dataMovies.json();
    setPopular(moveis.results);
    setFilterPopular(moveis.results);
  }

  console.log(popular);
  return (
    <motion.div animate={{opacity: 1}} initial={{ opacity: 0}} className="moviesFilter">
      <Filter 
        popular={popular}
        filterPopular={filterPopular}
        setFilterPopular={setFilterPopular}
        genre={genre} 
        setGenre={setGenre}  
      />
      <motion.ul 
       animate={{opacity: 1}} initial={{ opacity: 0}}
       className="moviesFilter__popular">
        <AnimatePresence>
          {filterPopular.map(movie => 
              <motion.li 
                layout
                animate={{opacity: 1, scale: 1}}
                initial={{ opacity: 0}}
                exit={{ opacity: 0, scale: 0.5}}
                transition={{ duration: .4}}
                className='moviesFilter__popular__movie' 
                key={movie.id}>
                  <Movies movies={movie} />
              </motion.li>
            )}
        </AnimatePresence>
      </motion.ul>
    </motion.div>
  );
}

export default App;