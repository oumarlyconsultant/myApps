import {NavLink, useLoaderData, useOutletContext, useParams} from "react-router-dom"
import imgH from "../../static/media/photosEmployes/employe_generique.png"

export default function EmployeDetails(){

    const {numeroEmploye} = useParams()

    const employes = useLoaderData()

    // console.log(numeroEmploye)
    const employe = employes.filter(employe => (employe.numeroEmploye == numeroEmploye))[0]

    // console.log(employe)

    return(
        <div className="theEmployeDetails">
            <div className="w3-panel w3-text-white" style={{backgroundColor:"gray"}}><h3>Fiche d'employe de: <strong>{employe.prenom} {employe.nom}</strong></h3></div>
            <div className="w3-card-4 w3-bar">
                <div className="w3-bar-item w3-container w3-cell w3-center w3-padding-16">
                    <img src={imgH} class="w3-hide-small w3-border" style={{width:"300px",height:"300px"}} />
                    <p>{employe.prenom}</p>
                </div>

                <div className="w3-bar-item w3-container w3-cell">
                    <p>Prenom: <strong>{employe.prenom}</strong></p>
                    <p>Nom de famille: <strong>{employe.nom}</strong></p>
                    <p>Date de naissance: {employe.dateNaissance}</p>
                    <p>Sexe: {employe.sexe}</p>
                    <p>Adresse de domicile: {employe.adressDomicile}</p>
                    <p>Ville: {employe.ville}</p>
                    <p>Telephone(s): {employe.telephone} / {employe.telephone2}  </p>
                    <p>Email: {employe.email}</p>    
                    <p>Poste occupe: {employe.poste}</p>                
                    <p>Departement: {employe.departement}</p>                    
                    <p>Responsable: {employe.responsable}</p>
                    <p>Numero d'employe: <strong>{employe.numeroEmploye}</strong></p>
                </div>            
            </div>
            <div className="w3-panel w3-center">
            <NavLink className="w3-btn w3-yellow w3-border" style={{width:"300px"}}>Modifier profile</NavLink> &nbsp;
            <NavLink className="w3-btn w3-red w3-border">Supprimer profile</NavLink>
            </div>
            
        </div>
    )
}