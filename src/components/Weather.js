import CurrentWeather from "./CurrentWeather"
import Wind from "./Wind"

export default function Weather(props){    

    function removeSearchResults(){
        console.log("HELP")
        alert("HELP")
        props.setListening(false)
        // props.dropdownBoolean = false
        // document.getElementsByClassName("location-dropdown").style.display = "none"
    }

    return(
        <div id="weather" className="weather" onClick={removeSearchResults}>
            <CurrentWeather loc={props.loc} currentWeather={props.currentWeather}/>
            <Wind />
        </div>
    )
}
