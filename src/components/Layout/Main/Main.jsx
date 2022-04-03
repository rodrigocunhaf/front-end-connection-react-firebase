import React, { useContext } from "react";
import { PageContext } from "../../Context/PageContext";
import { MovieList } from "../../MovieList/MovieList";
import { MovieRegister } from "../../MovieRegister/MovieRegister";
import style from "./Main.module.css";

const Main = ( props ) => {

    const pageContext = useContext(PageContext);

    return (
        <main className={style.container}>
            { pageContext.control.page === 'MovieList' && <div className={style.box}>
                                                                <MovieList/>
                                                          </div>}

            { pageContext.control.page === 'MovieRegister' && <div className={style.box}>
                                                                <MovieRegister/>
                                                          </div>}
        </main>
    )
};

export { Main };