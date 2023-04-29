import React, { useState } from "react";
import Page from "./Page";

function Sidebar(props){

    const [module,setModule] = useState("Acceuil");

    function handleClick(event){
        let clicked = event.target.name
    
        if (clicked === 'Acceuil') setModule('Acceuil')
        else if (clicked === 'Ventes') setModule('Ventes')
        else if (clicked === 'Operations') setModule('Operations')
        else if (clicked === 'Personnel') setModule('Personnel')
    
        console.log(clicked)
    }

    return(
        <div>
            <div className="w3-sidebar w3-bar-block w3-black w3-xxlarge sidebarOL">
                <div className="w3-bar-item">
                    <h1><strong>Vial-Mali Admin</strong></h1>
                </div>
                <ul>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Acceuil' ><i className="fa fa-home"></i> Acceuil</a></li>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Ventes'><i className="fa fa-money"></i> Ventes</a> </li>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Operations'><i className="fa fa-cogs"></i> Operations</a></li>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Personnel'><i className="fa fa-users"></i> Personnel</a></li>
                </ul>
            </div>
            <Page moduleName={module}/>
        </div>
    )
}

export default Sidebar;

