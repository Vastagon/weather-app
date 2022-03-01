
export default function CurrentWeather(props){
    let lastUpdatedTime
    let currentTime

    ///Conditional rendering for last updated time
    if(parseInt(props.currentWeather?.location?.localtime.substring(11,13))>12){
        lastUpdatedTime = <p className="weather-section-last-updated">Last Updated: {parseInt(props.currentWeather?.current?.last_updated.substring(11,13)) - 12}:{props.currentWeather?.location?.localtime.substring(14)} PM</p>
    } else if(props.currentWeather?.location?.localtime.substring(11,13) == 12){
        lastUpdatedTime = <p className="weather-section-last-updated">Last Updated: 12:{props.currentWeather?.current?.last_updated.substring(14)} AM</p>
    }else{
        lastUpdatedTime = <p className="weather-section-last-updated">Last Updated: {props.currentWeather?.current?.last_updated.substring(11)} AM</p>
    }

    ///Conditional rendering for local time
    if(parseInt(props.currentWeather?.location?.localtime.substring(11,13))>12){
        currentTime = <p className="weather-time">{parseInt(props.currentWeather?.location?.localtime.substring(11,13)) - 12}:{props.currentWeather?.location?.localtime.substring(14)} PM</p>
    } else if(props.currentWeather?.location?.localtime.substring(11,13) == 12){
        currentTime = <p className="weather-time">12:{props.currentWeather?.location?.localtime.substring(14)} AM</p>
    }else{
        currentTime = <p className="weather-time">{props.currentWeather?.location?.localtime.substring(11)} AM</p>
    }

    return(
        <div className="weather-section weather-block">
            <div className="weather-section-left">
                <h1 className="weather-block-title">Current Weather</h1>
                {currentTime}
                <div className="weather-section-left-bottom"> 
                    <img className="weather-section-image" src={props.currentWeather?.current?.condition?.icon}></img>
                    <h1 className="farenheit">{Math.round(props.currentWeather?.current?.temp_f)}{"\u00B0"}</h1>
                    <p className="f-letter">F</p>
                </div>                
                <span className="weather-image-text-span"><p className="weather-section-image-text">{props.currentWeather?.current?.condition?.text}</p></span>
            </div>
            <div className="weather-section-right">
                <div className="max-min-temp-container">
                    <p className="max-temp">{Math.round(props.currentWeather?.forecast?.forecastday[0]?.day?.maxtemp_f)}{"\u00B0"}</p>
                    <div className="temp-divider"></div>
                    <p className="min-temp">{Math.round(props.currentWeather?.forecast?.forecastday[0]?.day?.mintemp_f)}{"\u00B0"}</p>
                </div>
                {lastUpdatedTime}
            </div>
        </div>
    )
}