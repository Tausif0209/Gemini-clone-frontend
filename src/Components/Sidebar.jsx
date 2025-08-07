import React, { useContext, useState } from 'react'
import  './Sidebar.css'
import { assets } from '../assets/assets'
import { Context } from '../Context/Context'

const Sidebar = () => {
  const[collapse,setCollapse]=useState(false)
  const {onSent,prevPrompt,newChat}=useContext(Context)
  const loadPrompt = async (prompt)=>{
    await  onSent(prompt)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img className='menu' src={`${assets.menu_icon}`} alt="" onClick={()=>{
          setCollapse((p)=>!p)
        }}/>
        <div className="new_chat">
          <img src={assets.plus_icon} alt="" />
          {!collapse &&<p onClick={()=>{
            newChat()
          }}>New Chat</p>}
        </div>
        {!collapse &&  <div className="recent">
          <p className='recent-title'>Recent</p>
          {prevPrompt.map((p,index)=>{ return <div key={index} onClick={()=>{ loadPrompt(p)
          }} className="recent-entry">
                      <img src={assets.message_icon} alt="" />
                      <p>{p.slice(0,18)}...</p>
                    </div>
          })}
        </div>
        }
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