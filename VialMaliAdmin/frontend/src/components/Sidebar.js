import React, { useState } from "react";
import Page from "./Page";

function Sidebar(props){

    const [module,setModule] = useState("");

    function handleClick(event){
        let selectedModule = event.target.name
        setModule(selectedModule)
        console.log(selectedModule)
        console.log(module)
    
        // if (selectedModule === 'Acceuil') setModule('Acceuil')
        // else if (selectedModule === 'Ventes') setModule('Ventes')
        // else if (selectedModule === 'Operations') setModule('Operations')
        // else if (selectedModule === 'Personnel') setModule('Personnel')
        props.onSelectModule(module)
        event.preventDefault()
    }

    return(
        <div>
            <div className="w3-sidebar w3-bar-block w3-black w3-xxlarge sidebarOL">
                <div className="w3-bar-item">
                    <h1><strong>Vial-Mali Admin</strong></h1>
                </div>
                <ul>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Acceuil'><i className="fa fa-home"></i> Acceuil</a></li>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Ventes'><i className="fa fa-money"></i> Ventes</a> </li>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Operations'><i className="fa fa-cogs"></i> Operations</a></li>
                    <li className="w3-bar-item"><a href="#"  onClick={handleClick} name='Personnel'><i className="fa fa-users"></i> Personnel</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;

