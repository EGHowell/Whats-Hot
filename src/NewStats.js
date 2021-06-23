function NewStats(props) {
    const { summary } = props;

    const imgUrl = 'https://image.tmdb.org/t/p/w185';
    return (
        <li>
            <div>
                    <p>{summary}</p>
                </div>
            
        </li>
    )
}

export default NewStats;