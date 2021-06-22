function TrendingStats(props){
    const{title, imgSrc, score, summary} = props;

    const imgUrl = 'https://image.tmdb.org/t/p/w185';
    return (
        <li>
            <h3>{title}</h3>
            <div>
                <img src={`${imgUrl}${imgSrc}`} alt= {`Poster of ${title}`}  />
                <div>
                    <p>{score}</p>
                    <p>{summary}</p>
                </div>
            </div>
        </li>
    )
}

export default TrendingStats;