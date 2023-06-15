import { NavLink } from "react-router-dom"

export default function AjouterEmploye(){

    return(
        <div className="personnel-page">
            <div class="w3-row">
                <div class="w3-container">    
                       
                {/* The selection header */}
                    <div className="w3-panel w3-khaki w3-padding w3-round-large">
                    <h2 class="w3-text-black">Ajouter un nouvel employe</h2>
                    </div>

                {/* The selection content */}
                    <div className="theSelectionContent">
                        <p>Veuillez selectionner une des options ci-decu</p>
                    </div>
                
                </div>
            </div>
        </div>
    )

}