import React, { useState } from "react";
import "../assets/css/Home.css";
import Pomodoro from '../components/Pomodoro';


const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [backgroundColor, setBackgroundColor] = useState<string>(
    // "linear-gradient(43deg, #cf545ed7, #dd2f3ed7, #b10015da)"
    "#dd2f3ed7"
  );

  const handleTabChange = (tab: string, backgroundColor: string) => {
    setActiveTab(tab);
    setBackgroundColor(backgroundColor);
  };

  return (
    <div className="home" style={{ backgroundColor: backgroundColor }}>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="square-container">
        <div className="clock-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabChange("tab1", "#dd2f3ed7")}
            >
              Pomodoro
            </button>
            <button
              className={`tab ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabChange("tab2", "rgb(56, 133, 138)")}
            >
              Short Break
            </button>
          </div>
          <div className="content">
            {activeTab === "tab1" && <div><Pomodoro duration={25} /></div>}
            {activeTab === "tab2" && <div><Pomodoro duration={5} /></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;