

export default function LocationDropdownElement(props){
    function onDropdownClick(){
        props.setLoc({loc: props.name +" "+ props.region})
        props.setListening(false)///removes elements when clicked
    }

    return(
        <div onClick={onDropdownClick} className="location-dropdown-element">
            <p>{props.name}, {props.region}</p>
        </div>
    )
}