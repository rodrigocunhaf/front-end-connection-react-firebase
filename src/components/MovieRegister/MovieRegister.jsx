import React, { useRef } from "react";
import style from "./MovieRegister.module.css";
import axios from "axios";

const MovieRegister = ( ) =>{

    const movieName = useRef('');

    const onSubmitForm = async ( event ) => {
        event.preventDefault();

        try {

            const registerMovie = axios.post('https://fir-connection-ee7a7-default-rtdb.firebaseio.com/Movies.json',{ 
                name:movieName.current.value
            }); 

            movieName.current.value = '';
        }
        catch (err) {
            console.log(err);
        };
    };
    
    return (
        <form className={style.container} onSubmit={onSubmitForm}>
            <label>Movie Name</label>
            <input type={'text'} ref={movieName}></input>
            <div className={style.boxButton}>
                <button type={'submit'}>Register</button>
            </div>
        </form>)
};

export { MovieRegister }