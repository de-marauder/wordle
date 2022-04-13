import React from 'react'
import {MdOutlineBackspace} from 'react-icons/md'

import classes from './Keyboard.module.css'

export default function Keyboard() {
  return (
    <div className={classes.Keyboard}>
        
        <div className={classes.KeyRow}>
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
        </div>
    </div>
  )
}
