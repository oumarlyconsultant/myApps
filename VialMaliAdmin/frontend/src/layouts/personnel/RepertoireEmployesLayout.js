import { useState } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"

export default function RepertoireEmployesLayout(){

    const [mode,setMode] = useState("")
    const [searchKey,setSearchKey] = useState("")

    function handleChange(event){
        let e = event.target.value
        setSearchKey(e)
    }

    return(
        <div className="repertoire-employe-layout">
            <div class="w3-container">    
                       
                {/* The selection header */}
                <div className="repertoire-employes-header w3-panel w3-khaki w3-padding w3-round-large">
                    <h2 class="w3-text-black w3-bold"><strong>Repertoire des employes</strong></h2>
                </div>

                {/* The selection content */}
                <div className="repertoire-employes-content">
                    <div className="w3-row">
                        <form method="get">
                        <input type="text" placeholder="Rechercher par nom, prenom ou numero d'employe" name="searchKey" value={searchKey} onChange={handleChange} style={{width:"400px",height:"40px"}}/> 
                        <button name="search" onClick={(event) => {event.preventDefault();setMode('search')}} style={{width:"40px",height:"40px"}}><i className="fa fa-search"></i></button> &nbsp;
                        <NavLink to='actifs' id="theNavLinkOption" className="w3-button w3-light-gray w3-round">Liste de tous les employes</NavLink> &nbsp;
                        <NavLink to='/' id="theNavLinkOption" className="w3-button w3-light-gray w3-round">Employes inactifs</NavLink> &nbsp;                        </form>
                    </div>
                </div>

                <p></p>

                <Outlet />
                
            </div>
        </div>
    )

}