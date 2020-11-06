import React from 'react'
import './styling.css'
import web from '../images/rocket.png'
import { NavLink } from 'react-router-dom'
import Common from './Common'
function Home() {
    return (
        <div>
          <Common firstHeading="Grow Your Business with" buttonHeading="GetStarted" nLink="/services"/>
            </div>
    )
}

export default Home
