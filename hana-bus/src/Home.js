import "./App.css";
import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const movePage = useNavigate();
  const navigateToSecond = () => {
    movePage("/Second");
  };
  return (
    <div className="App">
      <div className="mobile-screen">
        <h1 className="text-center">동행택시</h1>
        <div className="first-btn" onClick={navigateToSecond}>
          자동 로그인
        </div>
      </div>
    </div>
  );
}

export default Home;
