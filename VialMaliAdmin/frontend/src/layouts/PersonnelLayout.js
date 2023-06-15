import { NavLink, Outlet } from "react-router-dom"

export default function PersonnelLayout(){

    return(
        <div className="personnel-layout">
            <div class="w3-bar w3-blue-gray w3-center" style={{height:"52px"}}>
                <h3 style={{color:"khaki"}}><strong>Gestion du personnel</strong></h3>
            </div>
            <div className="w3-center w3-padding w3-pannel w3-gray">
                <div class="w3-bar w3-large">
                    <NavLink to='repertoire' id="theNavLinkMenu" className="w3-bar-item w3-button w3-ripple w3-light-gray w3-round w3-margin-left">Repertoire des employes</NavLink>
                    <NavLink to='ajouter' id="theNavLinkMenu" className="w3-bar-item w3-button w3-ripple w3-light-gray w3-round w3-margin-left">Ajouter un nouvel employe</NavLink>
                    <NavLink to='absence' id="theNavLinkMenu" className="w3-bar-item w3-button w3-ripple w3-light-gray w3-round w3-margin-left">Enregistrer une abscence</NavLink>
                </div>
            </div>

            <Outlet />

        </div>
    )

}


{/* <NavLink to='absence' style={handleNavLink}><button class="w3-bar-item w3-button w3-ripple w3-pale-yellow w3-round w3-margin-left">Enregistrer une abscence</button></NavLink> */}