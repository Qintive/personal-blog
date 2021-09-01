import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from '../Header/Header.module.css'

const Header = () => {
    return <div className={classes.header}>
        <NavLink to='/' activeClassName={classes.activLinks}>
            <h6 className={classes.h6}>
                DANIIL KAUSHAN
            </h6>
        </NavLink>
    </div>
}

export default Header;