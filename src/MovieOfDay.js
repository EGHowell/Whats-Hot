import {useEffect, useState} from 'react'
import axios from 'axios';

import TrendingStats from './TrendingStats';


function MovieOfDay() {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            axios({
                url: 'https://api.themoviedb.org/3/trending/movie/day',
                method: 'GET',
                dataResponse: 'json',
                params: {
                    api_key: 'f1765d479bbce8c71368b606114d482e',
                }
            }).then((response) => {
                setMovie(response.data.results);
                setIsLoading(false)
            })
        }, [])

    const imgUrl = 'https://image.tmdb.org/t/p/w185';

    return (
        <div>
            {
                isLoading ? <p>Loading...</p> :
                movie.map( (poster) => {
                    return ( 
                        <TrendingStats
                            key = {poster.id}
                            imgSrc= {imgUrl + poster.poster_path}
                            title = {poster.title}
                            score = {poster.vote_average}
                            summary = {poster.overview}
                        />
                    )
                })
            }      
        </div>
    )
}

export default MovieOfDay;