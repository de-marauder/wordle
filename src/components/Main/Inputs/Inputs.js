import React from 'react'

import classes from './Inputs.module.css'

export default function Inputs(props) {

    // const word = [1,2,3,4,5].map((_, id)=>{
    //     return <strong key={id} className={classes.Letter}>{props.guess[id] || ''}</strong>
    // })
    // console.log('guess list => ', props.guessList)

    const sixWords = [1,2,3,4,5,6].map((_, id)=>{
        // console.log(props.guessList.length, id)
        return (
            <div key={id} className={classes.Word}>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[0] || '') : props.guessList[id] ? (props.guessList[id][0]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[1] || '') : props.guessList[id] ? (props.guessList[id][1]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[2] || '') : props.guessList[id] ? (props.guessList[id][2]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[3] || '') : props.guessList[id] ? (props.guessList[id][3]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[4] || '') : props.guessList[id] ? (props.guessList[id][4]): null}</strong>
            </div>
        )
    })
    
    return (
        <div className={classes.Inputs}>
            <input type={'text'} value={props.guess} hidden onChange={(e)=>{!(props.guess.length >= 5) ? props.setGuess(e.target.value.toUpperCase()) : props.setGuess(e.target.value.slice(0,5))}} />
            {sixWords}
            {/* <div className={classes.Word}>
                {word}
                <strong className={classes.Letter}>{props.guess[0] || ''}</strong>
                <strong className={classes.Letter}>{props.guess[1] || ''}</strong>
                <strong className={classes.Letter}>{props.guess[2] || ''}</strong>
                <strong className={classes.Letter}>{props.guess[3] || ''}</strong>
                <strong className={classes.Letter}>{props.guess[4] || ''}</strong>
            </div>
            <div className={classes.Word}>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
            </div>
            <div className={classes.Word}>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
            </div>
            <div className={classes.Word}>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
            </div>
            <div className={classes.Word}>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
            </div>
            <div className={classes.Word}>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
                <strong className={classes.Letter}></strong>
            </div> */}
        </div>
    )
}
