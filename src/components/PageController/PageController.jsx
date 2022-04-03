import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import { PageContext } from "../Context/PageContext";
import style from "./PageController.module.css";

const PageController = ( ) => {

    const pageContext = useContext(PageContext);
    const moviesContext =  useContext(MoviesContext);

    const goToPageList  = ( ) => {
        pageContext.setPageMovieList();
        moviesContext.updateMovieList();
    };
     
    return (
        <nav>
            <ul className={style.box}>
                <li><button onClick={goToPageList}>Movie List</button></li>
                <li><button onClick={pageContext.setPageMovieRegister} >Add Movie</button></li>
            </ul>
        </nav>
    )
};

export { PageController }