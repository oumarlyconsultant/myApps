import { NavLink, Outlet } from "react-router-dom"

export default function PersonnelLayout(){

    return(
        <div className="personnel-layout">
            <div class="w3-bar w3-blue-gray" style={{textAlign:"center"}}>
                <h3 style={{color:"yellow"}}>Gestion du personnel</h3>
            </div>
            <div class="w3-bar w3-light-gray w3-large">
                <a href="#" class="w3-bar-item w3-button">Employe</a>
                <a href="#" class="w3-bar-item w3-button">Absences</a>
                <a href="#" class="w3-bar-item w3-button">Salaires</a>
            </div>

            <Outlet />

        </div>
    )

}