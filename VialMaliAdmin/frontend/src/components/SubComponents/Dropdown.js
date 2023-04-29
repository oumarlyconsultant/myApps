import React from "react";

function Dropdown(props){
    return(
        <div className="w3-dropdown-hover">
            <button className="w3-button w3-black">{props.item}</button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
            <a href="#" className="w3-bar-item w3-button">{props.subitem1}</a>
            <a href="#" className="w3-bar-item w3-button">{props.subitem2}</a>
            <a href="#" className="w3-bar-item w3-button">{props.subitem3}</a>
            <a href="#" className="w3-bar-item w3-button">{props.subitem4}</a>
            </div>
        </div>
    )
}

export default Dropdown;