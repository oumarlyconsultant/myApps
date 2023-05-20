import React, { useState } from "react";
// import { handleClickNavItem } from "./myFunctions";

function Dropdown(props){

    const [option,setOption] = useState(props.item)

    function handleClick(event){
        let selectedOption = event.target.name
        // console.log(ev)
        setOption(selectedOption)
        props.onSelectOption(option)
        // setWhichClicked(ev)
        // console.log(whichClicked)
        // e.preventDefault()
    }

    return(
        <div className="w3-dropdown-hover">
            <button className="w3-button w3-black" name={props.item} onClick={handleClick}>{props.item}</button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
                <button className="w3-bar-item w3-button" name={props.subitem1} onClick={handleClick}>{props.subitem1}</button>
                <button className="w3-bar-item w3-button" name={props.subitem2} onClick={handleClick}>{props.subitem2}</button>
                <button className="w3-bar-item w3-button" name={props.subitem3} onClick={handleClick}>{props.subitem3}</button>
            </div>
        </div>
    )
}

export default Dropdown;