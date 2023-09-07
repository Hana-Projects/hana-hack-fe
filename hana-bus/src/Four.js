import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";

function Four() {
  const movePage = useNavigate();
  const navigateToThree = () => {
    movePage("/Three");
  };

  const navigateToFive = () => {
    movePage("/Five");
  };
  return (
    <div>
      <div className="mobile-screen">
        <h1 className="text-center" onClick={navigateToThree}>
          뒤로가기
        </h1>
        <h2 style={{ color: "#2B9F5E" }}>
          택시가 배정되었습니다. <br />
          택시 번호를 확인 후 탑승해주세요.
        </h2>
        <h1>택시 도착 예정 시간</h1>
        <h1 style={{ color: "#2B9F5E" }}>10시 58분 (5분 뒤)</h1>
        <h1>택시 번호</h1>
        <h1 onClick={navigateToFive} style={{ color: "#2B9F5E" }}>
          12 아 3456
        </h1>
        <div className="call-btn">기사에게 전화하기</div>
      </div>
    </div>
  );
}

export default Four;
