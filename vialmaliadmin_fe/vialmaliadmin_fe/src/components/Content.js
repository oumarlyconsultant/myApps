import React from "react";
import AjouterEmploye from "./Personnel/AjouterEmploye";
import EmployesExistants from "./Personnel/EmployesExistants";

function Content(promps){
    return(
        <div className="w3-container w3-margin-top w3-padding">
            <div className="w3-panel w3-dark-grey">
                <h2>{promps.option !== '' && promps.option}</h2>
            </div>
            <hr/>
            {promps.option === 'Ajouter un employe' && <AjouterEmploye/>}
            {promps.option === 'Employes existants' && <EmployesExistants/>}

        </div>
    )
}

export default Content;