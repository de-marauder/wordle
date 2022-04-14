import React from 'react'
import {IoStatsChart} from 'react-icons/io5'
import {FiSettings} from 'react-icons/fi'

import '../../../App.css'

export default function Stats() {
  return (
    <div>
        <IoStatsChart className='NavButtons' />
        <FiSettings className='NavButtons' />
    </div>
  )
}
