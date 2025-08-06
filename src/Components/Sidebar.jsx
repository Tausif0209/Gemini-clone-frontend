import React, { useState } from 'react'
import  './Sidebar.css'
import { assets } from '../assets/assets'
const Sidebar = () => {
  const[collapse,setCollapse]=useState(false)
  return (
    <div className="sidebar">
      <div className="top">
        <img className='menu' src={`${assets.menu_icon}`} alt="" onClick={()=>{
          setCollapse((p)=>!p)
        }}/>
        <div className="new_chat">
          <img src={assets.plus_icon} alt="" />
          {!collapse &&<p>New Chat</p>}
        </div>
        {!collapse &&  <div className="recent">
          <p className='recent-title'>Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>what is react..</p>
          </div>
        </div>}
        
      </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {!collapse &&<p>Help</p>}
          </div>
           <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {!collapse &&<p>Activity</p>}
          </div>
           <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {!collapse &&<p>Setting</p>}
          </div>
        </div>
    </div>
  )
}

export default Sidebar