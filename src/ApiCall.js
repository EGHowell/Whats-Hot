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
                    return (
                        (<TrendingStats
                            key={poster.id}
                            imgSrc={poster.poster_path || poster.profile_path}
                            title={poster.title || poster.name}
                            score={poster.vote_average || `Field: ${poster.known_for_department}`}
                            summary={poster.overview ||`Best Known For: | ${poster.known_for[0].title || poster.known_for[0].name} | ${poster.known_for[0].overview}`}
                        />) 
                    )
                })
            }
            
        </div>
    )
}

export default ApiCall;

