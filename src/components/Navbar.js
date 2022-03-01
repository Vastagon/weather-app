import LocationDropdown from "./LocationDropdown"
import { useEffect } from "react"

export default function Navbar({setListening, listening, loc, listOfLoc, inputData, setLoc, setInputData, currentWeather}){

    function handleChange(event){
        const {name, value} = event.target

        setInputData(prevEntry =>({
            ...prevEntry,
            [name]: value
        }))

    }
    function submitLoc(event){///Submits entered location and set loc to entry
        event.preventDefault()
        setLoc(inputData)
        setListening(false)///hides dropdown when submitted

    }
    useEffect(() =>{
        setListening(true)
    },[inputData])
    function handleInputClick(){
        setListening(true)
    }

    return(
        <form onSubmit={submitLoc} className="navbar">
            <h2 className="location">{currentWeather?.location?.name}, {currentWeather?.location?.region}</h2>
            <div className="location-dropdown-container">
                <div className="nav-search-and-button">
                    <input onClick={handleInputClick} autoComplete="off" required name="loc" onChange={handleChange} className="location-entry" type="text" placeholder="Location" />
                    <button className="search-button" type="submit">Search</button>
                </div>
                <LocationDropdown setLoc={setLoc} setListening={setListening} listening={listening} loc={loc} listOfLoc={listOfLoc}/>                
            </div>
        </form>
    )
}