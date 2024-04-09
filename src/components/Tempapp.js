import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&_units=meteric&appid=bd392eccb9ffc6cafd99593419a0a3f6`;
    const response = await fetch(url);
    console.log(url);
    const resJson = await response.json();
    setCity(resJson.main);
  };

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button onClick={() => fetchApi()}> Submit </button>
        </div>

        {!city ? (
          <p className="errorMsg"> No Data Found </p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°F</h1>
              <h3 className="tempmin_max">
                {" "}
                {/* {city.temp}°Cel| {city.temp}°Cel{" "} */}
              </h3> 
            </div>

            <div className="wave "></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;