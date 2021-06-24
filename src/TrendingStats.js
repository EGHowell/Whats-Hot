function TrendingStats(props){
    const{title, imgSrc, score, summary} = props;

    const imgUrl = 'https://image.tmdb.org/t/p/w185';
    return (
        <li>
            <h4>{title}</h4>
            <div className = "apiDisplay">
                <img src = {`${imgUrl}${imgSrc}`} alt = {`Poster of ${title}`}  />
                <div className = "mediaInfo">
                    <span className = "paragraph">
                        <span className = "rating"><p>{score}</p></span>
                        <p>{summary}</p>
                    </span>
                </div>
            </div>
        </li>
    )
}

export default TrendingStats;