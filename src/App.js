import { useState, useEffect } from 'react'

import MovieOfDay from './MovieOfDay';
import MovieOfWeek from './MovieOfWeek';
import TvOfWeek from './TvOfWeek';
import TvOfDay from './TvOfDay';



function App() {
  const [movieCategory, setMovieCategory] = useState(true);
  const [tvCategory, setTvCategory] = useState(false);
  const [mediaType, setMediaType] = useState('');
  const [timeWindow, setTimeWindow] = useState('');

  useEffect ( () => {
    if (movieCategory) {
      setTvCategory(false)
      setMediaType('movie')
    }
  }, [movieCategory])

  useEffect ( () => {
    if (tvCategory) {
      setMovieCategory(false)
      setMediaType('tv')
    }
  }, [tvCategory])


  const [display, setDisplay] = useState(false);
  
  useEffect ( () => {
    if (display) {
      setTimeWindow('day')
    } else {
      setTimeWindow('week')
    }
  }, [display])

  const onClickDay = () => setDisplay(true)
  const onClickWeek = () => setDisplay(false)


  return (
    <div className="App">
      <h1>Title</h1>
      <h2>H2</h2>
      
      <button onClick = {() => setTvCategory(true)}>TV</button>
      <button onClick = {() => setMovieCategory(true)}>MOVIE</button>
  
      <ol>
        <button onClick={onClickWeek}>Week</button>
        <button onClick={onClickDay}>Day</button>

        <h2> {mediaType} trending of the {timeWindow}</h2>

        {movieCategory ? display ?<MovieOfDay /> : <MovieOfWeek /> : null}

        {tvCategory ? display ? <TvOfDay /> : <TvOfWeek /> : null}
      </ol>
    </div>
  );
}

export default App;