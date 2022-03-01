import CurrentWeather from "./CurrentWeather"
import ForecastWeather from "./ForecastWeather"

export default function Weather(props){    

    function removeSearchResults(){
        props.setListening(false)
    }

    return(
        <div id="weather" className="weather" onClick={removeSearchResults}>
            <CurrentWeather loc={props.loc} currentWeather={props.currentWeather}/>
            <ForecastWeather currentWeather={props.currentWeather}/>
        </div>
    )
}
