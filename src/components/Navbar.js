import React, {useState} from "react"
import LocationDropdown from "./LocationDropdown"

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

    }
    function handleInputClick(){
        console.log("EGE")
        setListening(true)
    }

    React.useEffect(() =>{
        console.log(listening)
    }, [])
    return(
        <form onSubmit={submitLoc} className="navbar">
            <h2 className="location">{currentWeather?.location?.name}, {currentWeather?.location?.region}</h2>
            <div className="location-dropdown-container">
                <div className="nav-search-and-button">
                    <input onClick={handleInputClick} autoComplete="off" required name="loc" onChange={handleChange} className="location-entry" type="text" placeholder="Location" />
                    <button className="search-button" type="submit">Search</button>
                </div>
                <LocationDropdown setLoc={setLoc} listening={listening} loc={loc} listOfLoc={listOfLoc}/>                
            </div>
        </form>
    )
}