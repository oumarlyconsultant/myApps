import React from "react";

function Sidebar(){
    return(
            <div id='sidebar' className="w3-sidebar w3-bar-block w3-black w3-xxlarge">
                <div className="w3-bar-item">
                    <h1><strong>Vial-Mali Admin</strong></h1>
                </div>
                <ul>
                    <li className="w3-bar-item"><a href="#" ><i className="fa fa-home"></i> Acceuil</a></li>
                    <li className="w3-bar-item"><a href="#" ><i className="fa fa-money"></i> Ventes</a> </li>
                    <li className="w3-bar-item"><a href="#" ><i className="fa fa-cogs"></i> Operations</a></li>
                    <li className="w3-bar-item"><a href="#" ><i className="fa fa-users"></i> Personnel</a></li>
                </ul>
            </div>
    )
}

export default Sidebar;

