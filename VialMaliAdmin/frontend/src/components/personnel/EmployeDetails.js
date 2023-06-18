import {useLoaderData, useParams} from "react-router-dom"
import imgH from "../../../static/media/photosEmployes/employe_homme_inc.png"

export default function EmployeDetails(props){
    const {numeroEmploye} = useParams()
    const employes = useLoaderData()

    // console.log(numeroEmploye)
    const employe = employes.filter(employe => (employe.numeroEmploye == numeroEmploye))[0]

    // console.log(employe)

    return(
        <div className="theEmployeDetails" style={{width:"1000px"}}>
        <div className="w3-panel w3-text-white" style={{backgroundColor:"gray"}}><h3>Fiche d'employe de: <strong>{employe.prenom} {employe.nom}</strong></h3></div>
            <div className="w3-card-4 w3-bar">
                <div className="w3-bar-item w3-container w3-cell w3-center w3-padding-16">
                    <img src={imgH} class="w3-hide-small w3-border" style={{width:"300px",height:"300px"}} />
                    <p>{employe.prenom} {employe.nom}</p>
                </div>

                <div className="w3-bar-item w3-container w3-cell">
                    <p>Prenom: <strong>{employe.prenom}</strong></p>
                    <p>Nom de famille: <strong>{employe.nom}</strong></p>
                    <p>Date de naissance: {employe.dateNaissance}</p>
                    <p>Sexe: {employe.sexe}</p>
                    <p>Adresse a domicile: {employe.adressDomicile}</p>
                    <p>Tel: {employe.telephone}</p>
                    <p>Email: {employe.email}</p>
                    <p>Numero d'employe: <strong>{employe.numeroEmploye}</strong></p>
                    <p>Departement: {employe.departement}</p>
                    <p>Poste occupe: {employe.poste}</p>
                    <p>Responsable: {employe.responsable}</p>
                </div>
            
            </div>
        </div>
    )
}