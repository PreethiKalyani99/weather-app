import React from 'react';
import {useState, useEffect} from 'react';
import './Weather.css';
import axios from 'axios';

function DayOfWeekNumber(){
    let num = new Date().getDay();
    let weekNumberDay =  {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday"
    }
    return weekNumberDay[num];
}

function CityNameandTemperatureSelector(){
    const [city, setCity] = useState("");
    const [unit, setUnit] = useState("");
    
    return (
        <div id="output">
            <form id="forms">
                <label>City Name</label>
                <input required type="text" placeholder="" value={city} onChange={(e)=>{
                    setCity(e.target.value);
                    }}/>
                <select id="units" name="Unit" value={unit} onChange={(e)=>{
                    setUnit(e.target.value);
                     }}>
                    <option value="metric">Celcius</option>
                    <option value="imperial">Fahrenheit</option>
                </select>
            </form>
            <GetWeatherInfo city={city} unit={unit}/>
        </div>
    )
}

function GetWeatherInfo(city,unit){
   const [datas, setData] = useState([]);

   useEffect(() =>{
       fetchLink();
   })

   const fetchLink = async () =>{
        try{
            const result = await axios.get("http://api.openweathermap.org/data/2.5/weather?q="+city.city+"&units="+unit.unit+"&appid=3564a10d88457911c12463b5dd4eb867");
            setData(result.data);
        }
        catch(e){
            console.log(e);
        }
   }
   return <DisplayWeatherInfo res={datas}/>
}
    
function DisplayWeatherInfo(res){
    const [result, setResult] = useState("");

    function handleSearch(e){
        e.preventDefault();
        let image = `http://openweathermap.org/img/w/${res.res.weather[0].icon}.png`;
        
        let weatherInfo = <div>
            <img id="image" src={image} alt="weather icon"/>
            <div id="result">
            <h1>{Math.floor(res.res.main.temp)}{'\u00B0'}</h1>
              <DayOfWeekNumber/><br/>
              {res.res.weather[0].description}<br/>
              High: {Math.ceil(res.res.main.temp_max)}{'\u00B0'}{'\t'}
              Low: {Math.floor(res.res.main.temp_min)}{'\u00B0'}
            </div>
        </div>
        setResult(weatherInfo);
    }
    return (
        <div>
            <form id="form">
                <button type="button" onClick={handleSearch}>Get Weather!</button>
            </form>
            <div>
                {result}
            </div>
        </div>
    )
}
export default CityNameandTemperatureSelector;