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
  const [query2, setQuery2] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchValue2, setSearchValue2] = useState("");

  const [places, setPlaces] = useState([]);
  const [places2, setPlaces2] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchValue(value); // 이 부분을 추가
    // console.log("dd ", value);
  };
  const handleChange2 = (e) => {
    const value = e.target.value;
    setQuery2(value);
    setSearchValue2(value); // 이 부분을 추가
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
            onPlaceClick={(placeName) => setQuery(placeName)}
          />
        ) : null}

        <h1>택시타는 곳</h1>
        <input type="text" value={query2} onChange={handleChange2} placeholder="장소를 검색하세요..." />
        {searchValue2 ? (
          <PlaceSearch
            searchPlace={searchValue2}
            setPlaces={setPlaces2}
            onPlaceClick={(placeName) => setQuery2(placeName)}
          />
        ) : null}
        <h1>예상 소요시간</h1>
        {searchValue2 ? <h1 style={{ color: "#2B9F5E" }}>약 32분</h1> : null}
        <div className="first-btn" onClick={navigateToThree}>
          택시 부르기
        </div>
      </div>
    </div>
  );
}

export default Second;
