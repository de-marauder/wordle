import React, { useRef, useState } from 'react'
import Modal from '../UI/Modal/Modal'
import Inputs from './Inputs/Inputs'
import Keyboard from './Keyboard/Keyboard'
import { WORD_LIST } from '../../resources/wordleList'

import classes from './Main.module.css'


export default function Main() {


    const [guess, setGuess] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState()
    const [result, setResult] = useState([])
    // const [resultBool, setResultBool] = useState([])

    const guessList = useRef([])
    const resultList = useRef([])
    let gamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed')) || []
    const wordId = useRef(Math.floor(Math.random() * WORD_LIST.length + 1))
    localStorage.setItem('wordId', wordId.current)
    let winsCount = localStorage.getItem('winsCount') ? localStorage.getItem('winsCount') : 0
    localStorage.setItem('winsCount', winsCount)
    // console.log(localStorage.getItem('wordId'))
    const word =  WORD_LIST[localStorage.getItem('wordId') || wordId.current]

    const backSpace = () => {
        setGuess(guess.split('').splice(0, guess.length - 1).join(''))
    }

    const checkWord = (guess) => {

        let guessBool = ['', '', '', '', '']

        if (guess === word) {
            setMessage("CONGRATULATIONS!!!\n You have guessed correctly!!")
            setShowModal(true)
            winsCount = Number(winsCount) + 1
            localStorage.setItem('winsCount', winsCount)
            gamesPlayed.push({no: gamesPlayed.length, status: 'passed', attemptsTaken: guessList.current.length})
            localStorage.setItem('gamesPlayed', JSON.stringify(gamesPlayed))
            guessBool = ['1', '1', '1', '1', '1']
            return guessBool
        }

        

        let copy_word = [word][0]
        let copy_word_list = copy_word.split('')

        const arr = [0, 1, 2, 3, 4]
        arr.forEach((i) => {
            // console.log('forEach begins...')
            try {

                let id = copy_word_list.indexOf(guess[i])

                if (copy_word.includes(guess[i])) {
                    // console.log('i = ', i, ' id = ', id)

                    if (guess[i] === copy_word_list[i]) {
                        guessBool[i] = '1'
                    }
                    else if (copy_word_list[id] === guess[id]) {
                        guessBool[i] = '0'
                    }
                    else {
                        guessBool[i] = '+'
                    }

                    // console.log('copy_word_list = ', copy_word_list)
                    if (id >= 0) { copy_word_list[id] = '' }
                    // console.log('copy_word_list = ', copy_word_list)

                } else {
                    guessBool[i] = '0'
                }
            } catch (error) {
                // console.log(`${guess[i]} not in ${copy_word_list}`)
                guessBool[i] = '0'
            }
            // console.log('guessBool = ', guessBool)
            // console.log('copy_word_list = ', copy_word_list)
            // console.log('new_word = ', copy_word, '\n')
        })

        // console.log('Answer = ', guessBool.join(''), '\n')

        return guessBool
    }

    const setResultBool = (result) => {
        return result.map(el => {return el === '1' ? 1 : el === '0' ? 0 : null})
    }

    const submitGuess = (guess) => {
        // console.log(guess)
        if (guess.length !== 5) {
            alert("You must enter a 5 letter word")
            return
        }
        if (!(WORD_LIST.includes(guess.toLowerCase()))) {
            alert("Word not in list!")
            return
        }
        guessList.current.push(guess)
        const newGuess = guess.toLowerCase()
        const res = checkWord(newGuess)
        resultList.current.push(res)
        setResult(res)
        
        
        if (guessList.current.length >= 6) {
            setMessage(`Game over! \nYou have exceeded number of tries.\nThe word was "${word}"`)
            gamesPlayed.push({no: gamesPlayed.length, status: 'failed', attemptsTaken: 7})
            localStorage.setItem('gamesPlayed', JSON.stringify(gamesPlayed))
            setShowModal(true)
        }
        setGuess('')
    }

    const resetGame = () => {
        guessList.current = []
        resultList.current = []
        setGuess('')
        setResult('')
        setShowModal(false)
        setMessage(null)
        wordId.current = Math.floor((Math.random() * WORD_LIST.length) + 1)
        localStorage.setItem('wordId', wordId.current)
        // console.log(guess)
        // console.log(guessList.current)
        // console.log(message)
        // console.log(showModal)
    }

    // console.log(result, typeof result)
    // console.log(resultBool)
    // console.log(resultBool.reduce((prev, curr) => { return (Number(prev) + Number(curr)) }, 0))
    console.log(word)
    // console.log(localStorage.getItem('winsCount'))
    return (
        <div className={classes.Main}>
            {showModal ? <Modal resetGame={resetGame} message={message} /> : null}
            <Inputs setResultBool={setResultBool} result={result} resultList={resultList.current} guessList={guessList.current} guess={guess} setGuess={setGuess} />
            <Keyboard setResultBool={setResultBool} result={result} resultList={resultList.current} guess={guess} submitGuess={submitGuess} backSpace={backSpace} setGuess={setGuess} guessList={guessList.current} />
        </div>
    )
}
