import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import taxi from "./imgs/taxi.png";

function Home() {
  const movePage = useNavigate();
  const navigateToSecond = () => {
    movePage("/Second");
  };
  return (
    <div>
      <div className="mobile-screen">
        <h1 className="text-center" style={{ marginBottom: "0px", fontSize: "45px" }}>
          동행택시
        </h1>
        <p>당신 곁에 함께합니다.</p>
        <img style={{ width: "180px" }} src={taxi} alt="taxi" />
        <div className="first-btn" onClick={navigateToSecond}>
          자동 로그인
        </div>
      </div>
    </div>
  );
}

export default Home;
