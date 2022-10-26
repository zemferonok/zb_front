import React from 'react';
import {Outlet, NavLink} from "react-router-dom";

import css from "./MainLayout.module.css";
import Image from "../../images/Body.png"

const MainLayout = () => {
    return (<div className={css.MainLayout}
                 style={{backgroundImage: `url(${Image})`, backgroundRepeat: "no-repeat"}}>

        <div className={css.header}>
            <NavLink to={'form'}><p>Form</p></NavLink>
            <NavLink to={'comments'}><p>Comments</p></NavLink>
        </div>

        <div className={css.Outlet}>
            <Outlet/>
        </div>

        <img src={require('../../images/Footer.png')} alt="Footer"/>

    </div>);
};

export {MainLayout};