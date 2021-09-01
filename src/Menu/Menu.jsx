import React from 'react'
import Banner from '../Component/Banner/Banner';
import LessonContainer from '../Component/Lesson/LessonContainer';

const Menu = (props) => {
    return(
        <div>
            <div>
                <Banner/>
            </div>
            <div className='menu'>
                <LessonContainer state={props.state}/>
            </div>
        </div>
    )
}

export default Menu;