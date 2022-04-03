import React from "react";
import { PageController } from "../../PageController/PageController";
import style from "./Header.module.css"

const Header = ( ) => {

    return (
        <header className={style.container}>
            <div className={style.box}>
                <PageController/>
            </div>
        </header>
    )
};

export {Header};