import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../assets/assets";
import { Context } from "../Context/Context";
const Main = () => {
  const {onSent,prompt,showResult,loading,setInput,input,resultData}=useContext(Context)
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        {/* <img className="img" src={assets.user_icon} alt="" /> */}
        <button className="theme-toggle" onClick={() => {
  document.body.classList.toggle('dark-theme');
}}>
  🌓
</button>
      </div>
      <div className="main-container">
        {showResult?<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" className="user-icon"/>
            <p>{prompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
           
          </div>
        </div>:
        <> <div className="greet">
          <p><span>Hello, Developer! Type it. I’ll handle it</span></p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Discover hidden gems to explore on your next weekend getaway</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Summarize this topic in simple terms: Quantum Computing</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Plan engaging icebreakers for a fresh project kickoff</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improve the readibility of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div></>
        }
       
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here..." onChange={(e)=>{
               setInput(e.target.value)
            }} value={input} onKeyDown={(e)=>e.key==='Enter' && onSent()}/>
            <div><img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            {input && <img src={assets.send_icon} alt="" onClick={()=>{
              onSent();
            }}/>}
            </div>
          </div>
          <p>Gemini does its best to give accurate results, but there's always a chance of mistakes. We recommend double-checking important information.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
