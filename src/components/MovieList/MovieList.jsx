import React, {useContext, useEffect } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import style from "./MovieList.module.css";

const MovieList = ( ) => {

    const moviesContext = useContext(MoviesContext);

    useEffect ( ( ) => { 
        moviesContext.updateMovieList();
    },[])
    
    return ( 
            <ul className={style.container}>
                {moviesContext.data.movieList.map ( ( movie, index) => {
                    return ( 
                        <React.Fragment key={index}>
                            <li>{movie.name}</li>
                            <hr/>
                        </React.Fragment>   
                    )})}
            </ul>)
};


export { MovieList };