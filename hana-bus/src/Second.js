import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PlaceSearch from "./PlaceSearch";

function Second() {
  const movePage = useNavigate();

  const navigateToThree = () => {
    movePage("/Three");
  };

  const navigateToHome = () => {
    movePage("/");
  };

  const [query, setQuery] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [places, setPlaces] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchValue(value); // 이 부분을 추가
    // console.log("dd ", value);
  };
  console.log("value : ", searchValue);
  const handleInputChange = (value) => {
    setSearchValue(value);
  };
  console.log("ddddddd", places);
  return (
    <div>
      <div className="mobile-screen">
        <h1 className="text-center" onClick={navigateToHome}>
          뒤로가기
        </h1>
        <h1>가시는 병원</h1>
        <input type="text" value={query} onChange={handleChange} placeholder="장소를 검색하세요..." />
        {searchValue ? (
          <PlaceSearch
            searchPlace={searchValue}
            setPlaces={setPlaces}
            onPlaceClick={(placeName) => console.log(placeName)}
          />
        ) : null}

        <h1>택시타는 곳</h1>
        <h1>예상 소요시간</h1>
        <div className="first-btn" onClick={navigateToThree}>
          택시 부르기
        </div>
      </div>
    </div>
  );
}

export default Second;
