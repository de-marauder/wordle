import React from 'react'
import { IoClose } from 'react-icons/io5'

import classes1 from '../HowToPlay/HowToPlay.module.css'
import classes2 from './GameStats.module.css'
import '../../../App.css'


export default function GameStats(props) {

    const gamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed')) || []
    const winsCount = Number(localStorage.getItem('winsCount')) || 0
    // console.log(gamesPlayed, winsCount)

    const frequency = gamesPlayed.map((el, id) => {
        let style;
        switch (el['status']) {
            case 'passed':
                style = { color: 'green' }
                break
            case 'failed':
                style = { color: 'red' }
                break
            default:
                style = null
                break
        }
        return (
            <div className={classes2.Frequency} key={id}>
                <p><strong>Game {el.no + 1} </strong></p>
                <p>
                    Attempts taken: {el['attemptsTaken']}
                </p>
                <p>
                    Status: <span style={style}>{el['status']}</span>
                </p>
            </div>
        )
    })

    // console.log(frequency)

    const graphData = gamesPlayed.map((el) => {
        return el.attemptsTaken
    })
    // console.log(graphData)
    const graphData2 = [1, 2, 3, 4, 5, 6].map((el) => {
        let counter = 0
        let data = { count: counter };
        graphData.forEach((attemptsTaken) => {
            if (attemptsTaken === el) {
                counter++
                data = { count: counter }
            }
        })
        return data
    })
    // console.log(graphData2)

    const data = graphData2.map((el, id) => {
        let sumAttempts = 0
        graphData2.forEach((e, i)=>{
            // console.log('e[count]', e['count'])
            // console.log('i', i)
            sumAttempts += e['count']
        })
        // console.log('sumAttempts: ', sumAttempts)
        // console.log(el['count'] * 100/sumAttempts)
        return (
            <div key={id} className={classes2.Data}>
                <p>{id + 1}</p>
                <div style={{width: `${el['count'] * 100/sumAttempts}%`}} className={classes2.Bar}><span>{el['count'] > 0 ? el['count'] : null}</span></div>
            </div>
        )
    })


    return (
        <div className={classes1.HowToPlay}>
            <IoClose onClick={() => {
                props.toggleSidebar(!props.sidebar);
                props.setShowStats(!props.showStats)
            }} className={'NavButtons' + ' ' + classes1.Cancel} />

            <h2 className={classes1.Title}>Game Statistics</h2>

            <div className={classes2.Section1}>
                <div>
                    <h3>No of games played</h3>
                    <p>{gamesPlayed.length}</p>
                </div>
                <div>
                    <h3>No of wins</h3>
                    <p>{winsCount}</p>
                </div>
            </div>
            <div className={classes2.Section2}>
                <div className={classes2.Graph}>
                    ATTEMPT FREQUENCY GRAPH
                    <div style={{marginTop: '1em'}}>
                        {data}
                    </div>
                </div>
                <div className={classes2.FrequencyWrapper}>
                    {frequency}
                </div>

            </div>
        </div >
    )
}
