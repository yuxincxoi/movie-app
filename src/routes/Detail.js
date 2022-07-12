import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        console.log(json)
    };    
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className={styles.detail}>
            <h1>{movie.title_long}</h1>
            {/* <p>
                {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </p> */}
            <div className={styles.container}>
                <h3 className={styles.info}>📽 {movie.runtime} min</h3>
                <h3 className={styles.info}>💕 {movie.like_count}</h3>
                <h3 className={styles.info}>⭐ {movie.rating}</h3>
            </div>
            <div>
                <img src={movie.medium_cover_image} />
            </div>
            <div>
                <h2>Summary</h2>
                <p>{movie.description_full}</p>
            </div>
        </div>
    )
}

export default Detail;