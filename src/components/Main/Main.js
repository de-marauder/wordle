import React, { useRef, useState } from 'react'
import Modal from '../UI/Modal/Modal'
import Inputs from './Inputs/Inputs'
import Keyboard from './Keyboard/Keyboard'

import classes from './Main.module.css'

export default function Main() {

    const [guess, setGuess] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState()

    const guessList = useRef([])

    const backSpace = () => {
        setGuess(guess.split('').splice(0, guess.length-1).join(''))
    }
    const submitGuess = (guess) => {
        console.log(guess)
        if (guess.length !== 5) {
            alert("You must enter a 5 letter word")
            return
        }
        guessList.current.push(guess)
        console.log(guessList.current)
        if (guessList.current.length >= 6) {
            setError(new Error("Game over! \nYou have exceeded number of tries."))
            setShowModal(true)
            // alert("Game over! \nYou have exceed number of tries.")
        }
        setGuess('')
    }

    const resetGame = () => {
        guessList.current = []
        setGuess('')
        setShowModal(false)
        setError(null)
        console.log(guess)
        console.log(guessList.current)
        console.log(error)
        console.log(showModal)
    }

    return (
        <div className={classes.Main}>
            {showModal ? <Modal resetGame={resetGame} message={error?.message} /> : null}
            <Inputs guessList={guessList.current} guess={guess} setGuess={setGuess} />
            <Keyboard guess={guess} submitGuess={submitGuess} backSpace={backSpace} setGuess={setGuess} guessList={guessList.current} />
        </div>
    )
}
