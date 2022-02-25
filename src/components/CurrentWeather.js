import {useState, useEffect} from "react"

export default function CurrentWeather(props){

    return(
        <div className="weather-section weather-block">
            <div className="weather-section-left">
                <h1 className="weather-block-title">Current Weather</h1>
                {parseInt(props.currentWeather?.location?.localtime.substring(11,13))>12 ?
                    <p className="weather-time">{parseInt(props.currentWeather?.location?.localtime.substring(11,13)) - 12}:{props.currentWeather?.location?.localtime.substring(14)} PM</p>
                    :
                    <p className="weather-time">{props.currentWeather?.location?.localtime.substring(11)} AM</p>
                }

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
                {parseInt(props.currentWeather?.location?.localtime.substring(11,13))>12 ?
                        <p className="weather-section-last-updated">Weather Last Updated: {parseInt(props.currentWeather?.current?.last_updated.substring(11,13)) - 12}:{props.currentWeather?.location?.localtime.substring(14)} PM</p>
                        :
                        <p className="weather-section-last-updated">Weather Last Updated: {props.currentWeather?.current?.last_updated.substring(11)} AM</p>
                }
            </div>
        </div>
    )
}
                {/* <p className="weather-section-last-updated">Weather Last Updated: {props.currentWeather?.current?.last_updated.substring(11)}</p> */}


/// If the first digit(or two) of localtime is less than 12, show am, else show pm
/// Then if the hour is greater than 12, subtract 12 from the hour and show pm

///JUST IN CASE
            {/* {props.currentWeather?.location?.localtime.length == 16 ? <p className="weather-time">{props.currentWeather?.location?.localtime.substring(11)}</p> 
            : 
            <p className="weather-time">{props.currentWeather?.location?.localtime.substring(11)}</p>} */}                
{/* <p className="weather-time">{props.currentWeather?.location?.localtime.substring(11)}</p> */}
