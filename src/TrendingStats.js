function TrendingStats(props){
    const{title, imgSrc, score, summary} = props;

    return (
        <li>
            <div>
                <h3>{title}</h3>
                <img src={imgSrc} alt= {'Poster of the movie ' + title} />
                <p>{score}</p>
                <p>{summary}</p>
            </div>
        </li>
    )
}

export default TrendingStats;