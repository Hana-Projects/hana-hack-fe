import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import taxi from "./imgs/taxi.png";
import siren from "./imgs/alarm.png";
import Fade from "./Fade";

function Five() {
  const movePage = useNavigate();
  const navigateToThree = () => {
    movePage("/Three");
  };
  return (
    <Fade>
      <div>
        <div className="mobile-screen">
          <h1 className="text-center">택시 탑승 완료</h1>
          <img src={taxi} alt="taxi" style={{ width: "200px" }} />
          <h1 style={{ marginTop: "5px" }}>예상 소요시간</h1>
          <h1 style={{ color: "#2B9F5E", marginBottom: "0" }}>약 32분</h1>
          <div className="greenline"></div>
          <h1>택시 번호</h1>
          <h1 style={{ color: "#2B9F5E", marginBottom: "0" }}>12 아 3456</h1>
          <div className="greenline"></div>
          <div className="singo-btn">
            <img style={{ width: "40px", marginRight: "10px" }} src={siren} alt="siren" />
            신고하기
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Five;
