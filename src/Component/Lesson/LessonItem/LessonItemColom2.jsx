import React from 'react'
import { NavLink } from 'react-router-dom';
import './LessonItem.css'

const LessonItemColom2 = (props) => {
    return (
        <div>
            <NavLink to={'/inTheLesson/' + props.id}>
                <div className='leson'>
                    <img src={props.photo}/>
                </div>
            </NavLink>
        </div>
    )
}

export default LessonItemColom2;