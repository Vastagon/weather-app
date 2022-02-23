import {useState} from "react"

export default function Navbar({loc, inputData, setLoc, setInputData}){

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

    return(
        <form onSubmit={submitLoc} className="navbar">
            <input required name="loc" onChange={handleChange} className="location-entry" type="text" placeholder="Location" />
            <button type="submit">Submit</button>
        </form>
    )
}