import { useState, useEffect } from 'react'

import ApiCall from './ApiCall';


function App() {
  const [totalCategory, setTotalCategory] = useState(false)
  const [movieCategory, setMovieCategory] = useState(false);
  const [tvCategory, setTvCategory] = useState(false);
  const [celebCategory, setCelebCategory] = useState(false);

  const [mediaType, setMediaType] = useState('movie');
  const [timeWindow, setTimeWindow] = useState('week');

  useEffect( () => {
    if (totalCategory) {
      setMovieCategory(false)
      setTvCategory(false)
      setCelebCategory(false)
      setMediaType('all')
    }
  }, [totalCategory])

  useEffect( () => {
    if (movieCategory) {
      setTotalCategory(false)
      setTvCategory(false)
      setCelebCategory(false)
      setMediaType('movie')
    }
  }, [movieCategory])

  useEffect( () => {
    if (tvCategory) {
      setTotalCategory(false)
      setMovieCategory(false)
      setCelebCategory(false)
      setMediaType('tv')
    }
  }, [tvCategory])

  useEffect( () => {
    if (celebCategory) {
      setTotalCategory(false)
      setMovieCategory(false)
      setTvCategory(false)
      setMediaType('person')
    }
  }, [celebCategory])


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

      <button onClick = { () => setTotalCategory(true)}>ALL</button>
      <button onClick = { () => setMovieCategory(true) }>MOVIE</button>
      <button onClick = { () => setTvCategory(true) }>TV</button>
      <button onClick ={ () => setCelebCategory(true) }>CELEBRITY</button>
    
  
      <ol>
        <button onClick = { onClickWeek }>Week</button>
        <button onClick = { onClickDay }>Day</button>

        <h2> {mediaType} trending of the {timeWindow}</h2>

      <ApiCall media = { mediaType } time = { timeWindow }/>

      </ol>
    </div>
  );
}

export default App;