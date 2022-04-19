import React from 'react'
import {IoClose} from 'react-icons/io5'

import classes from './HowToPlay.module.css'
import '../../../App.css'

export default function HowToPlay(props) {

    const style1 = {
        backgroundColor: "green",
        border: 'none'
    }
    const style2 = {
        background: "#ffbc00",
        border: 'none'
    }
    const style3 = {
        background: "#444",
        border: 'none'
    }

    const words = [
        ['WEARY', [`The letter `, <strong key={1}>W</strong>, ` is in the word and in the correct spot`]],
        ['PILLS', [`The letter `, <strong key={2}>I</strong>, ` is in the word but in the wrong spot`]],
        ['VAGUE', [`The letter `, <strong key={3}>U</strong>, ` is not in the word in any spot`]]
    ]

    const examples = words.map((word, id) => {

        const letters = word[0].split('').map((letter, i) => {
            return (
                <div key={i}>
                    <strong style={letter === 'W' ? style1 : letter === 'I' ? style2 : letter === 'U' ? style3 : null } className={classes.Letter}>{letter}</strong>
                </div>
            )
        })
        return (
            <div key={id}>
                <div className={classes.Word}>
                    {letters}
                </div>
                <p>{word[1]}</p>
            </div>
        )
    })

    return (
        <div className={classes.HowToPlay}>
            <IoClose onClick={()=>{
                props.toggleSidebar(!props.sidebar); 
                props.setShowHelp(!props.showHelp)
                }} className={'NavButtons' + ' ' + classes.Cancel} />

            <h2 className={classes.Title}>How to play</h2>
            <div>
                <p>Guess the <strong>WORDLE</strong> in six tries.</p>
                <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
                <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            </div>
            <hr />
            <div>
                <h3>Examples</h3>
                {examples}
            </div>
        </div>
    )
}
