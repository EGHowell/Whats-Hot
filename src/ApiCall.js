import { useEffect, useState } from 'react'
import axios from 'axios';

import TrendingStats from './TrendingStats';


function ApiCall(props) {
    const [mediaPiece, setMediaPiece] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/trending/${props.media}/${props.time}`,
            method: 'GET',
            dataResponse: 'json',
            params: {
                api_key: 'f1765d479bbce8c71368b606114d482e',
            }
        }).then((response) => {
            setMediaPiece(response.data.results);
            setIsLoading(false)
        })
    }, [props.media, props.time])



    return (
        <div>
            {
                isLoading ? <p>Loading...</p> :
                mediaPiece.map((poster) => {
                    const getNestedObject = (nestedObj, posterArray) => {
                        return posterArray.reduce((obj, key) =>
                            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
                    }


                    const knownWorkM = getNestedObject (poster, ['known_for', '0', 'title'])
                    const knownworkT = getNestedObject(poster, ['known_for', '0', 'name'])
                    const workSummary = getNestedObject(poster, ['known_for', '0', 'overview'])


                    return (
                        (<TrendingStats
                            key = {poster.id}
                            imgSrc = {poster.poster_path || poster.profile_path}
                            title = {poster.title || poster.name}
                            score={poster.known_for_department || `User Rating: ${poster.vote_average}` }
                            
                            summary = {poster.overview || `Known For || ${knownWorkM || knownworkT} || ${workSummary}`}
                        />) 
                    )
                })
            }
            
        </div>
    )
}

export default ApiCall;

