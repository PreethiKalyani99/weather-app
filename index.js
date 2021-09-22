import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

class WeatherApp extends React.Component{
    render(){
         return <Weather/>
    }
}
ReactDOM.render(<WeatherApp/>,document.getElementById('root'));