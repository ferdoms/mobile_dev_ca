var weather = {
  temp: undefined,
  icon: undefined,
  getWeatherData: function(coords) {
    var { latitude, longitude } = coords;
    
    api.fetchData(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=8598513448d8ef923f45b654f2771988`,
      this.onSuccess
    );
  },
  onSuccess: d => {
    // assigning data to local variable (this data will be saved in local storage)
    weather.temp = d.main.temp;
    weather.icon = d.weather[0].icon;

    document.getElementById("temp").innerHTML = weather.temp.toFixed(1);
    document.getElementById(
      "temp_icon"
    ).src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    weather.loading(false);
  },
  loading:function(boolean){
    if(boolean){
        document.getElementById("loading_weather").style = "";
        document.getElementById("weather_page").style = "display:none;";
    }else{
        document.getElementById("loading_weather").style = "display:none;";
        document.getElementById("weather_page").style = "";
    }
    
  }
};
