import React from 'react'
import Backdrop from './Backdrop/Backdrop'

import classes from './Modal.module.css'

export default function Modal({ message, resetGame }) {
    return (
        <>
            <Backdrop />
            <div className={classes.Modal}>
                <h2>Message</h2>
                <p>
                    {message}
                    {/* {"Game over! \nYou have exceed number of tries."} */}
                </p>
                <button onClick={resetGame}>Play again</button>
            </div>
        </>
    )
}
