import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import movingTaxi from "./imgs/movingtaxi.gif";
import Fade from "./Fade";

function Second() {
  const movePage = useNavigate();
  const navigateToSecond = () => {
    movePage("/Second");
  };
  const navigateToFour = () => {
    movePage("/Four");
  };
  return (
    <Fade>
      <div>
        <div className="mobile-screen">
          <h1 onClick={navigateToFour} style={{ paddingTop: "150px", color: "green" }}>
            택시 부르는 중...
          </h1>
          <img onClick={navigateToFour} style={{ width: "200px" }} src={movingTaxi} alt="Taxi GIF" />
          <div style={{ marginTop: "150px" }} className="singo-btn" onClick={navigateToSecond}>
            호출 취소
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Second;
