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


    letterList = letterList.join('').split('')
    letterListBool = letterListBool.join('').split('')

    console.log("LetterList", letterList)
    console.log("LetterListBool", letterListBool)

    const style1 = {
        backgroundColor: "green",
    }
    const style2 = {
        background: "#222",
    }
    const style3 = {
        background: "yellow",
    }

    const styleCondition = (id) => {
        if (!(letterList.includes(ALPHABET[id]))) {
            return null
        }
        const i = letterList.reverse().indexOf(ALPHABET[id])

        console.log(ALPHABET[id])
        console.log(i, letterListBool.reverse()[i])
        // console.log([i])

        if (letterListBool[i] === '1') { return style1 }
        else if (letterListBool[i] === '0') { return style2 }
        else if (letterListBool[i] === '+') { return style3 }
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
            {/* <div className={classes.KeyRow}>
                <strong>Q</strong>
            <strong>W</strong>
            <strong>E</strong>
            <strong>R</strong>
            <strong>T</strong>
            <strong>Y</strong>
            <strong>U</strong>
            <strong>I</strong>
            <strong>O</strong>
            <strong>P</strong>
            </div>
            <div className={classes.KeyRow}>
                <strong>A</strong>
                <strong>S</strong>
                <strong>D</strong>
                <strong>F</strong>
                <strong>G</strong>
                <strong>H</strong>
                <strong>J</strong>
                <strong>K</strong>
                <strong>L</strong>
            </div>
            <div className={classes.KeyRow}>
                <strong className={classes.Enter}>ENTER</strong>
                <strong>Z</strong>
                <strong>X</strong>
                <strong>C</strong>
                <strong>V</strong>
                <strong>B</strong>
                <strong>N</strong>
                <strong>M</strong>
                <strong className={classes.Backspace}><MdOutlineBackspace /></strong>
            </div> */}
        </div>
    )
}
