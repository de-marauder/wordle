import React from 'react'

import classes from './Inputs.module.css'

export default function Inputs(props) {

    // console.log("resultList", props.resultList)
    const resultBoolList = props.resultList.map((el)=>{
        const res = el.join('')
        return props.setResultBool(res.split(''))
    })
    // console.log("resultBoolList", resultBoolList)

    const style1 = {
        backgroundColor: "green",
    }
    const style2 = {
        background: "#444",
    }
    const style3 = {
        background: "yellow",
    }

    const sixWords = [1,2,3,4,5,6].map((_, id)=>{
        // console.log(props.guessList.length, id)
        console.log(resultBoolList[0])

        const word = [1,2,3,4,5].map((_, i)=>{
            return <strong key={i} style={id < resultBoolList.length ? (resultBoolList[id][i] === 1 ? style1 : resultBoolList[id][i] === 0 ? style2 : resultBoolList[id][i] === null ? style3 : null) : null} className={classes.Letter}>{props.guessList.length === id ? (props.guess[i] || '') : props.guessList[id] ? (props.guessList[id][i]): null}</strong>

        })

        return (
            <div key={id} className={classes.Word}>
                {word}
                {/* <strong style={resultBoolList[0] === 1 ? style1 : resultBoolList[0] === 0 ? style2 : resultBoolList[0] === null ? style3 : null} className={classes.Letter}>{props.guessList.length === id ? (props.guess[0] || '') : props.guessList[id] ? (props.guessList[id][0]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[1] || '') : props.guessList[id] ? (props.guessList[id][1]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[2] || '') : props.guessList[id] ? (props.guessList[id][2]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[3] || '') : props.guessList[id] ? (props.guessList[id][3]): null}</strong>
                <strong className={classes.Letter}>{props.guessList.length === id ? (props.guess[4] || '') : props.guessList[id] ? (props.guessList[id][4]): null}</strong> */}
            </div>
        )
    })
    
    return (
        <div className={classes.Inputs}>
            <input type={'text'} value={props.guess} hidden autoFocus={true} onChange={(e)=>{!(props.guess.length >= 5) ? props.setGuess(e.target.value.toUpperCase()) : props.setGuess(e.target.value.slice(0,5))}} />
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
