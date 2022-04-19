import React from 'react'
import {IoStatsChart} from 'react-icons/io5'
import {FiSettings} from 'react-icons/fi'

import '../../../App.css'

export default function Stats(props) {
  return (
    <div>
        <IoStatsChart onClick={()=>{
          props.toggleSidebar(!props.sidebar)
          props.setShowStats(!props.showStats)
        }} className='NavButtons' />
        <FiSettings className='NavButtons' />
    </div>
  )
}
