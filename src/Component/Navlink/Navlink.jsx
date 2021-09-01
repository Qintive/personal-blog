import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from '../Navlink/Navlink.module.css'

const Navlink = () => {
    return (
        <div>
            <NavLink to='/main' activeClassName={classes.activLinks}>{
                <button className={classes.button}>
                        HOW I LEARNED REACT
                </button>}</NavLink>
        </div>
    )
}

export default Navlink;