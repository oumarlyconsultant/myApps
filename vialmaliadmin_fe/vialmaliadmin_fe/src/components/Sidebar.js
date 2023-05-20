import React, { useState } from "react";
import Navbar from "./Navbar";

function Sidebar(){

    const [module,setModule] = useState("Acceuil")

    function chooseModule(event){
        const e = event.target.name
        // console.log(e)
        setModule(e)
    }

    return(
    <div>
        {/* sidebar */}
        <div className="w3-sidebar w3-dark-grey w3-bar-block" style={{width:"15%"}}>
        <h3 className="w3-bar-item">Vial-Mali Admin</h3>
        <a href="#" className="w3-bar-item w3-button" name="Acceuil" onClick={chooseModule}>Acceuil</a>
        <a href="#" className="w3-bar-item w3-button" name="Ventes" onClick={chooseModule}>Ventes</a>
        <a href="#" className="w3-bar-item w3-button" name="Operations" onClick={chooseModule}>Operations</a>
        <a href="#" className="w3-bar-item w3-button" name="Personnel" onClick={chooseModule}>Personnel</a>
        </div>

        {/* navbar and content */}
        <div style={{marginLeft:"15%"}}>
            <Navbar module={module}/>
        </div>
    </div>
    )
}

export default Sidebar;