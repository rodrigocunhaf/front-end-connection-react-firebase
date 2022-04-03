import React, { useRef, useState } from "react";
import style from "./MovieRegister.module.css";
import axios from "axios";

const MovieRegister = ( ) =>{

    const movieName = useRef('');

    const [isVisible, setVisible] = useState(false);

    const onSubmitForm = async ( event ) => {
        event.preventDefault();
        setVisible(true)

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
    

    const closeModal = ( ) => {
        setVisible(false);
    };

    return (
        <React.Fragment>
            { isVisible && <div className={style.confirmationModal}>
                <div className={style.box}>
                    <div >Film successfully registered</div>
                    <div className={style.boxButton}>
                        <button onClick={closeModal} className={style.marginButton}>OK</button>
                    </div>
                </div>
            </div>}
            <form className={style.container} onSubmit={onSubmitForm}>
                <label>Movie Name</label>
                <input type={'text'} ref={movieName}></input>
                <div className={style.boxButton}>
                    <button type={'submit'}>Register</button>
                </div>
            </form>
        </React.Fragment>)
};

export { MovieRegister }