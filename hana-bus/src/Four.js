import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import back from "./imgs/left-arrow.png";
import Fade from "./Fade";
import call from "./imgs/call.png";

function Four() {
  const movePage = useNavigate();
  const navigateToThree = () => {
    movePage("/Three");
  };

  const navigateToFive = () => {
    movePage("/Five");
  };
  return (
    <Fade>
      <div>
        <div className="mobile-screen">
          <div style={{ display: "flex", alignItems: "center", paddingTop: "60px" }}>
            <img style={{ height: "30px", margin: "5px" }} src={back} alt="back" />
            <h1 className="moveback" onClick={navigateToThree}>
              뒤로가기
            </h1>
          </div>
          <h2 style={{ color: "#2B9F5E", marginTop: "50px", marginBottom: "50px" }}>
            택시가 배정되었습니다. <br />
            택시 번호를 확인 후 탑승해주세요.
          </h2>
          <h1>택시 도착 예정 시간</h1>
          <h1 style={{ color: "#2B9F5E", marginBottom: "0px" }}>10시 58분 (5분 뒤)</h1>
          <div className="greenline" />
          <h1>택시 번호</h1>
          <h1 onClick={navigateToFive} style={{ color: "#2B9F5E", marginBottom: "0px" }}>
            12 아 3456
          </h1>
          <div className="greenline" />
          <div className="call-btn">
            <img style={{ width: "30px", marginRight: "10px" }} src={call} alt="siren" />
            기사에게 전화하기
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Four;
