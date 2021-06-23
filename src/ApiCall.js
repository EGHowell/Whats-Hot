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
                    const getNestedObject = (nestedObj, pathArr) => {
                        return pathArr.reduce((obj, key) =>
                            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
                    }
                    const knownWork = getNestedObject (poster, ['known_for', '0', 'title' || 'name'])
                    const workSummary = getNestedObject(poster, ['known_for', '0', 'overview']);


                    return (
                        (<TrendingStats
                            key={poster.id}
                            imgSrc={poster.poster_path || poster.profile_path}
                            title={poster.title || poster.name}
                            score={poster.vote_average || `Field: ${poster.known_for_department}`}
                            summary={poster.overview || `Known For:  || ${knownWork} || ${workSummary}`}
                        />) 
                    )
                })
            }
            
        </div>
    )
}

export default ApiCall;

