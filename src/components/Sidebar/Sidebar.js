import React from 'react'
import Backdrop from '../UI/Backdrop/Backdrop'
import HowToPlay from './HowToPlay/HowToPlay'

import classes from './Sidebar.module.css'

export default function Sidebar(props) {
    return (
        <>
            <Backdrop style={{ top: '0' }} />
            <div className={classes.Sidebar}>
                <HowToPlay {...props} />
            </div>
        </>
    )
}
