import React, { useRef, useState } from 'react'
import Inputs from './Inputs/Inputs'
import Keyboard from './Keyboard/Keyboard'

import classes from './Main.module.css'

export default function Main() {

    const [guess, setGuess] = useState('')
    const [guessLetter, setGuessLetter] = useState()

    const guessList = useRef([])

    const submitGuess = (guess) => {
        guessList.current.push(guess)
        console.log(guessList.current)
        setGuess('')
    }

    return (
        <div className={classes.Main}>
            <Inputs guessList={guessList.current} guess={guess} guessLetter={guessLetter} />
            <Keyboard guess={guess} submitGuess={submitGuess} setGuess={setGuess} setGuessLetter={setGuessLetter} />
        </div>
    )
}
