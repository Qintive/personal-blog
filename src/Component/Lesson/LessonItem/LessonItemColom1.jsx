import React from 'react'
import { NavLink } from 'react-router-dom';
import './LessonItem.css'


const LessonItemColom1 = (props) => {

    return (

        <div>
            <NavLink to={'/inTheLesson/' + props.id}>
                <div className='leson'>
                    <img src={props.photo} />
                </div>
            </NavLink>
        </div>
    )
}

//Сделал 3 массива в редьюсера - 3 колонки уроков//

export default LessonItemColom1;