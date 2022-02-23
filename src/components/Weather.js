

export default function Weather(props){
    console.log(props.currentWeather.location)
    

    return(
        <div className="weather">
            <h2>{props.currentWeather.location.name}</h2>
            <p>Farenheit: {props.currentWeather.current.temp_f}</p>
        </div>
    )
}

//.name and temp_f don't work, but just location does