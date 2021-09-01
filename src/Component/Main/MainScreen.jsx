import React from 'react'
import Navlink from '../Navlink/Navlink'
import './MainScreen.css'


const MainScreen = () => {
    return (
        <div className = 'app-wrapper-content'>
            <div className='mainScreen' >
                <div className='welcom'>
                    <h2 className='welcom'>
                        <b>Welcome</b>
                    </h2>
                </div>
                <div className='button'>
                    <Navlink />
                </div>
            </div>
        </div>
    )
}

export default MainScreen