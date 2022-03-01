import {useEffect, useState, useRef} from "react"
import LocationDropdownElement from "./LocationDropdownElement"
import {v4 as uuid} from "uuid"

export default function LocationDropdown(props){
        const allDropdownElements = props.listOfLoc.map(locationData =>{
            return(
                <LocationDropdownElement setListening={props.setListening} setLoc={props.setLoc} name={locationData.name} region={locationData.region} key={uuid()} />
            )

        })        


    return(
        <div className={props.listening ? "location-dropdown" : "none"}>
            {allDropdownElements}
        </div>
    )
}