import React from 'react';
import './weather.css';
import {useState} from 'react';

function Weather(){
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("");
  const [result, setResult] = useState("");

  function handleSearch(e){
    e.preventDefault();

    let date = new Date();
    let dayOfWeekNumber = date.getDay();
    let nameOfDay;

    switch(dayOfWeekNumber){
      case 0: 
      nameOfDay = 'Sunday';
      break;
  case 1:
      nameOfDay = 'Monday';
      break;
  case 2:
      nameOfDay = 'Tuesday';
      break;
  case 3:
      nameOfDay = 'Wednesday';
      break;
  case 4:
      nameOfDay = 'Thursday';
      break;
  case 5:
      nameOfDay = 'Friday';
      break;
  case 6:
      nameOfDay = 'Saturday';
      break;
  default:
      nameOfDay = 'Sunday';
      break;

  }
  fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+unit+"&appid=3564a10d88457911c12463b5dd4eb867")
  .then(a => a.json())
  .then(res => {
    let image = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`;

    let temperature = <div>
        <img id = "image" src = {image} /> 
        <div id="result">
          <h1>{Math.floor(res.main.temp)}{'\u00B0'}</h1>
          {nameOfDay}<br/>
          {res.weather[0].description}<br/>
          High: {Math.ceil(res.main.temp_max)}{'\u00B0'}{'\t'}
          Low: {Math.floor(res.main.temp_min)}{'\u00B0'}
        </div>
    </div>;
    setResult(temperature);
    console.log(setResult(temperature))
    })
  }
  return(
    <div id="output">
      <form onSubmit = {handleSearch} id="forms">
        <label>City Name</label>
        <input type="text" placeholder="" value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
        <select id="units" name = 'Unit' value={unit} onChange={(e)=>{setUnit(e.target.value)}}>
          <option value="imperial">Fahrenheit</option>
          <option value="metric">Celcius</option>
        </select>
        <button type = "submit">Get Weather!</button>
      </form>
      <div>
      {result}
      </div>
    </div>
  )
}
export default Weather;