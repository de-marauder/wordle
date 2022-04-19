import React from 'react'
// import {BiMenuAltLeft} from 'react-icons/bi'
import {IoHelpCircleOutline} from 'react-icons/io5'

import '../../../App.css'

export default function Menu(props) {
  return (
    <div>
        {/* <BiMenuAltLeft className='NavButtons'/> */}
        <IoHelpCircleOutline onClick={()=>{props.toggleSidebar(!props.sidebar); props.setShowHelp(!props.showHelp)}} className='NavButtons'/>
    </div>
  )
}
