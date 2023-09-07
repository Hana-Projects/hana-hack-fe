import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import movingTaxi from "./imgs/movingtaxi.gif";

function Second() {
  const movePage = useNavigate();
  const navigateToSecond = () => {
    movePage("/Second");
  };
  const navigateToFour = () => {
    movePage("/Four");
  };
  return (
    <div>
      <div className="mobile-screen">
        <h1 className="text-center" onClick={navigateToSecond}>
          뒤로가기
        </h1>
        <h1 onClick={navigateToFour}>택시 부르는 중...</h1>
        <img onClick={navigateToFour} style={{ width: "200px" }} src={movingTaxi} alt="Taxi GIF" />
        <div className="no-btn" onClick={navigateToSecond}>
          호출 취소
        </div>
      </div>
    </div>
  );
}

export default Second;
