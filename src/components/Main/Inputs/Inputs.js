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
        border: 'none'
    }
    const style2 = {
        background: "#444",
        border: 'none'
    }
    const style3 = {
        background: "#ffbc00",
        border: 'none'
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
            </div>
        )
    })
    
    return (
        <div className={classes.Inputs}>
            <input type={'text'} value={props.guess} hidden autoFocus={true} onChange={(e)=>{!(props.guess.length >= 5) ? props.setGuess(e.target.value.toUpperCase()) : props.setGuess(e.target.value.slice(0,5))}} />
            {sixWords}
        </div>
    )
}
