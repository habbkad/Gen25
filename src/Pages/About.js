import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function About() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState("");

  let apiKey = "573923e4b66e90258aa72bdf90b33b01";

  const getWeather = async () => {
    await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <Button onClick={getWeather}>Search</Button>
      <h1>{cityWeather}</h1>
    </div>
  );
}

export default About;
