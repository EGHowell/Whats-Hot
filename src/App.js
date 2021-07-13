import { useState, useEffect } from 'react'

import ApiCall from './ApiCall';
import Links from './Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';


function App() {
  const facebook = <FontAwesomeIcon icon={faFacebookF} />
  const twitter = <FontAwesomeIcon icon={faTwitter} />
  const github = <FontAwesomeIcon icon={faGithub} />
  const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />
  const downArrow = <FontAwesomeIcon icon ={faLevelDownAlt} />

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

  

const [showLinks, setShowLinks] = useState(false)

  return (
    <div className="App wrapper">
    
        <header>
          <nav>
            <div className = "myLinks">

              <button onMouseEnter={() => setShowLinks(true)}>My INFO</button>
              <div onMouseLeave = { () => setShowLinks(false)}>
                {showLinks ? <Links /> : null}
              </div>

            </div>

            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo of tmdb movie site" />
          </nav>

          <div className="pageTitle">
            <h1>WHAT'S <span>HOT?</span> </h1>
            <h2>Find out whats trending across social media {downArrow}</h2>
            <p>* updated daily</p>
          </div>

          <div className="categorySelector" id="list">
            <button onClick={() => setTotalCategory(true)}>ALL</button>
            <button onClick={() => setMovieCategory(true)}>MOVIE</button>
            <button onClick={() => setTvCategory(true)}>TV</button>
            <button onClick={() => setCelebCategory(true)}>CELEBRITY</button>
          </div>
        </header>
        <a className="resetButton" href="#list">BACK TO TOP</a>

        <main>

          <div className ="timeWindowSelector">
            <button  onClick={onClickWeek}>Week</button>
            <button onClick={onClickDay}>Day</button>
          </div>

          <h3> Trending <span className = "movieP">{mediaType}</span> of the  <span className = "timeP">{timeWindow}</span> </h3>

          <ol >
            <ApiCall media = { mediaType } time = { timeWindow }/>
          </ol>
        </main>

        <footer>

          <div className = "myInfo">
            <p>Created by <span>Eric Howell </span> </p>
            <ul>
              <li><a href="https://twitter.com/EricHow311">{twitter}</a></li>
              <li><a href="https://github.com/RixTrixx">{github}</a></li>
              <li><a href="https://www.facebook.com/eric.howell.98">{facebook}</a></li>
              <li><a href="https://www.linkedin.com/in/eric-howell-513656b9/">{linkedIn}</a></li>
            </ul>
          </div>

          <p>&copy; Juno College 2021</p>
        </footer>

    </div>
  );
}

export default App;