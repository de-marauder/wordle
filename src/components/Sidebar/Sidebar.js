import React from 'react'
import Backdrop from '../UI/Backdrop/Backdrop'
import HowToPlay from './HowToPlay/HowToPlay'
import GameStats from './GameStats/GameStats'

import classes from './Sidebar.module.css'

export default function Sidebar(props) {
    return (
        <>
            <Backdrop style={{ top: '0' }} />
            <div className={classes.Sidebar}>
                {props.showHelp ? <HowToPlay {...props} /> : null}
                {props.showStats ? <GameStats {...props} /> : null}
            </div>
        </>
    )
}
