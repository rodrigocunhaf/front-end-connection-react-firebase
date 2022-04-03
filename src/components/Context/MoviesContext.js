import React, { useState } from "react";
import axios from "axios";

const MoviesContext = React.createContext();




const initialState = {
    movieList:[]
};

const MovieProvider =  ( props ) =>  {

    const [movieList, setMovieList] = useState(initialState);

    const updateMovieList = async () =>{
        try {
            const newMovieList =  await axios.get("https://fir-connection-ee7a7-default-rtdb.firebaseio.com/Movies.json")

            if  ( newMovieList.data !== null){

                const objKeys = Object.keys(newMovieList.data);

                const newList = [];

                objKeys.map ( key=> {
                    newList.push({name: newMovieList.data[key].name})
                });
                
                setMovieList( prevState => {
                    return {...prevState, movieList:newList}
                });
            } else {
                setMovieList( prevState => {
                    return {...prevState, movieList:[]}
                });
            }
            

        } catch ( err ){
            console.log(err)
        }
        
    };
    return <MoviesContext.Provider value={{ data:movieList, updateMovieList}}>{props.children}</MoviesContext.Provider>
};

export { MovieProvider, MoviesContext};