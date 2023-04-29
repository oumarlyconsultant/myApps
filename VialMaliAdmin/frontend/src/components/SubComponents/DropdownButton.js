import React from "react";

//Always used within a 'ul' tag
function DropdownButton(props){
    return(
    <li className={props.activeOrInactive}>
        <a href={props.indexPage} data-toggle="collapse" aria-expanded="false">
            <i className="glyphicon glyphicon-home"></i>
            {props.item}
        </a>
        <ul className="collapse list-unstyled" id="homeSubmenu">
            <li><a href="#">{props.subitem1}</a></li>
            <li><a href="#">{props.subitem2}</a></li>
            <li><a href="#">{props.subitem3}</a></li>
            <li><a href="#">{props.subitem4}</a></li>
            <li><a href="#">{props.subitem5}</a></li>
        </ul>
    </li>
    )    
}

export default DropdownButton;