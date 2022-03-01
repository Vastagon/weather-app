
export default function ForecastWeather(props){

    return(
        <div className="forecast-weather weather-block">
            <h1 className="weather-block-title">Forecast</h1>
            <div className="forecast-weather-container">
                <div className="forecast-weather-container-element">
                    <h3 className="forecast-time">Morning</h3>
                    <p className="forecast-temp">{Math.round(props.currentWeather?.forecast?.forecastday[0]?.hour[8]?.temp_f)}{"\u00B0"}</p>
                    <img className="forecast-icon" src={props.currentWeather?.forecast?.forecastday[0]?.hour[8]?.condition.icon}></img>
                    <p className="forecast-percent">{props.currentWeather?.forecast?.forecastday[0]?.hour[8]?.chance_of_rain}%</p>

                </div>
                <div className="forecast-weather-container-element">
                    <h3 className="forecast-time">Afternoon</h3>
                    <p className="forecast-temp">{Math.round(props.currentWeather?.forecast?.forecastday[0]?.hour[14]?.temp_f)}{"\u00B0"}</p>
                    <img className="forecast-icon" src={props.currentWeather?.forecast?.forecastday[0]?.hour[14]?.condition.icon}></img>
                    <p className="forecast-percent">{props.currentWeather?.forecast?.forecastday[0]?.hour[14]?.chance_of_rain}%</p>

                </div>
                <div className="forecast-weather-container-element">
                    <h3 className="forecast-time">Evening</h3>
                    <p className="forecast-temp">{Math.round(props.currentWeather?.forecast?.forecastday[0]?.hour[22]?.temp_f)}{"\u00B0"}</p>
                    <img className="forecast-icon" src={props.currentWeather?.forecast?.forecastday[0]?.hour[22]?.condition.icon}></img>
                    <p className="forecast-percent">{props.currentWeather?.forecast?.forecastday[0]?.hour[22]?.chance_of_rain}%</p>

                </div>
                <div className="forecast-weather-container-element-end forecast-weather-container-element">
                    <h3 className="forecast-time">Overnight</h3>
                    <p className="forecast-temp">{Math.round(props.currentWeather?.forecast?.forecastday[0]?.hour[4]?.temp_f)}{"\u00B0"}</p>
                    <img className="forecast-icon" src={props.currentWeather?.forecast?.forecastday[0]?.hour[4]?.condition.icon}></img>
                    <p className="forecast-percent">{props.currentWeather?.forecast?.forecastday[0]?.hour[4]?.chance_of_rain}%</p>
                </div>
            </div>
        </div>
    )
}

///times 8am,2pm,10pm, and 4am