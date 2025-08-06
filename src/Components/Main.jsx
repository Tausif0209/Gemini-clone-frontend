import React from "react";
import "./Main.css";
import { assets } from "../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img className="img" src={assets.user_icon_} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
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
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here..."/>
            <div><img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p>Gemini does its best to give accurate results, but there's always a chance of mistakes. We recommend double-checking important information.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
