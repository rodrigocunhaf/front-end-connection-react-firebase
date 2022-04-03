import React, {useContext, useEffect } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import style from "./MovieList.module.css";

const MovieList = ( ) => {

    const moviesContext = useContext(MoviesContext);

    useEffect ( ( ) => { 
        moviesContext.updateMovieList();
    },[])
    
    return ( 
            <React.Fragment>
                {moviesContext.data.movieList.length > 0 && <ul className={style.container}>
                    {moviesContext.data.movieList.map ( ( movie, index) => {
                        return ( 
                            <React.Fragment key={index}>
                                <li>{movie.name}</li>
                            </React.Fragment>   
                        )})}
                    </ul>}
                    {moviesContext.data.movieList.length === 0 && <div className={style.emptyList}> No movies found in the list.</div>}
            </React.Fragment>)
};


export { MovieList };