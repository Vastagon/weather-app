import CurrentWeather from "./CurrentWeather"
import Wind from "./Wind"

export default function Weather(props){    

    return(
        <div className="">
            <h2 className="location">{props.currentWeather?.location?.name}, {props.currentWeather?.location?.region}</h2>
            <CurrentWeather loc={props.loc} currentWeather={props.currentWeather}/>
            <Wind />
        </div>
    )
}
