import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import taxi from "./imgs/taxi.png";

function Five() {
  const movePage = useNavigate();
  const navigateToThree = () => {
    movePage("/Three");
  };
  return (
    <div>
      <div className="mobile-screen">
        <h1>택시 탑승 완료</h1>
        <img src={taxi} alt="taxi" style={{ width: "200px" }} />
        <h1>예상 소요시간</h1>
        <h1>약 32분</h1>
        <h1>택시 번호</h1>
        <h1>12 아 3456</h1>
        <div className="singo-btn">신고하기</div>
      </div>
    </div>
  );
}

export default Five;
