import React from "react";
import ReactDOM from "react-dom";
import CityNameandTemperatureSelector from './Weather';
// import Name from "./arguments";


class WeatherApp extends React.Component{
    render(){
        return <CityNameandTemperatureSelector/>;
        // return <Name/>
    }
}
ReactDOM.render(<WeatherApp/>,document.getElementById('root'));