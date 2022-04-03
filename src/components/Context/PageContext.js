import React, { useState } from "react";

const PageContext = React.createContext();

const initialState = {
    page:'MovieList'
};

const PageProvider = ( props) => {

    const [page, setPage ] = useState(initialState);

    const setPageMovieList = ( ) => {
        setPage(prevState => {
            return {...page, page:'MovieList'}
        });
    };

    const setPageMovieRegister = ( ) => {
        setPage(prevState => {
            return {...page, page:'MovieRegister'}
        });
    };

    return <PageContext.Provider value={{
        control:page,
        setPageMovieList,
        setPageMovieRegister
    }}>{props.children}</PageContext.Provider>
};

export { PageProvider , PageContext }