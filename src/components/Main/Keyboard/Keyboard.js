import React from 'react'
import { MdOutlineBackspace } from 'react-icons/md'

import { ALPHABET } from '../../../resources/wordleList'

import classes from './Keyboard.module.css'

export default function Keyboard(props) {

    // console.log("resultList", props.resultList)
    let letterList = []
    let letterListBool = []
    props.resultList.forEach((el, id) => {

        letterList.push(props.guessList[id])
        letterListBool.push(el.join(''))

    })

    // console.log("LetterList", letterList)
    // console.log("LetterListBool", letterListBool)

    letterList = letterList.join('').split('').reverse()
    letterListBool = letterListBool.join('').split('').reverse()

    console.log("LetterList", letterList)
    console.log("LetterListBool", letterListBool)

    const style1 = {
        backgroundColor: "green",
        border: "none"
    }
    const style2 = {
        background: "#222",
        border: "none"
    }
    const style3 = {
        background: "#ffbc00",
        border: "none"
    }

    const styleCondition = (id) => {
        if (!(letterList.includes(ALPHABET[id]))) {
            return null
        }
        const iArr = []

        letterList.forEach((el, index) => {
            if (el === ALPHABET[id]) {
                iArr.push(index)
            }
        })
        const i = iArr.map((el) => {
            if (letterListBool[el] === '1') {
                return el
            } else if (letterListBool[el] === '+') {
                return el
            } else {
                return el
            }
        })

        if (letterListBool[i[0]] === '1') { return style1 }
        else if (letterListBool[i[0]] === '0') { return style2 }
        else if (letterListBool[i[0]] === '+') { return style3 }
        return null
    }

    const keyboard = [1, 2, 3].map((_, id) => {
        let keyArr;
        switch (id) {
            case 0:
                keyArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, id) => <strong style={styleCondition(id)} onClick={!(props.guessList.length >= 6) ? () => { props.setGuess(!(props.guess.length >= 5) ? props.guess + ALPHABET[id] : props.guess) } : null} key={ALPHABET[id]} > {ALPHABET[id]}</strong >)
                break
            case 1:
                keyArr = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, id) => <strong style={styleCondition(id + 10)} onClick={!(props.guessList.length >= 6) ? () => { props.setGuess(!(props.guess.length >= 5) ? props.guess + ALPHABET[id + 10] : props.guess) } : null} key={ALPHABET[id + 10]}>{ALPHABET[id + 10]}</strong>)
                break
            case 2:
                keyArr = (
                    <>
                        <strong onClick={!(props.guessList.length >= 6) ? (() => props.submitGuess(props.guess)) : null} className={classes.Enter}>ENTER</strong>
                        {[0, 1, 2, 3, 4, 5, 6].map((_, id) => <strong style={styleCondition(id + 19)} onClick={!(props.guessList.length >= 6) ? () => { props.setGuess(!(props.guess.length >= 5) ? props.guess + ALPHABET[id + 19] : props.guess) } : null} key={ALPHABET[id + 19]}>{ALPHABET[id + 19]}</strong>)}
                        <strong onClick={() => props.backSpace()} className={classes.Backspace}><MdOutlineBackspace /></strong>
                    </>
                )
                break
            default:
                break
        }
        return (
            <div key={id} className={classes.KeyRow}>
                {keyArr}
            </div>
        )
    })
    return (
        <div className={classes.Keyboard}>
            {keyboard}
        </div>
    )
}
