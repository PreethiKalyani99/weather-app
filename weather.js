function getWeather(){
    let city = document.getElementById('search').value;
    let units = document.getElementById('units').value;
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
    }

    fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&appid=3564a10d88457911c12463b5dd4eb867")
    .then(a => a.json())
    .then(res => {
        document.getElementById("image").src="http://openweathermap.org/img/w/"+res.weather[0].icon+".png";
        document.getElementById("output").innerHTML="<h1>"+Math.floor(res.main.temp)+"\u00B0</h1>"+nameOfDay+"<br>"+res.weather[0].description+"<br> High: "+Math.ceil(res.main.temp_max)+"\u00B0  Low: "+Math.floor(res.main.temp_min)+"\u00B0 ";
    })
}