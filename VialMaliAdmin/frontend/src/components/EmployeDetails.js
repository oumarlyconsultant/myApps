import { useState } from "react"
import {NavLink, useLoaderData, useLocation, useOutletContext, useParams} from "react-router-dom"
import imgH from "../../static/media/photosEmployes/employe_generique.png"
import getAPIData from "../functions/getAPIData"

export default function EmployeDetails(navigate){

    const {numeroEmploye} = useParams()

    const employes = useLoaderData()

    // console.log(numeroEmploye)
    const employe = employes.filter(obj => (obj.numeroEmploye == numeroEmploye || obj.id == numeroEmploye))[0]
    const termesEmploi = getAPIData('termesEmploi').filter(obj => (obj.employe == employe.id))[0]
    const ville = getAPIData('ville').filter(obj => (obj.id == employe.ville))[0]
    const poste = getAPIData('poste').filter(obj => (obj.id == employe.poste))[0]
    const departement = getAPIData('departement').filter(obj => (obj.id == employe.departement))[0]
    const responsable = getAPIData('employe').filter(obj => (obj.id == employe.responsable))[0]
    

    // console.log(employe)
    // console.log(termes)

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
                    <p>Numero d'employe: <strong>{employe.numeroEmploye}</strong></p>
                    <p>Date de naissance: {employe.dateNaissance}</p>
                    <p>Sexe: {employe.sexe}</p>
                    <p>Adresse de domicile: {employe.adresseDomicile}</p>
                    <p>Ville: {ville && ville.ville}</p>
                    <p>Telephone(s): {employe.telephone} / {employe.telephone2}  </p>
                    <p>Email: {employe.email}</p>    
                    <p>Poste occupe: {poste && poste.nom}</p>                
                    <p>Departement: {departement && departement.nom}</p>                    
                    <p>Responsable: {responsable && responsable.prenom} {responsable && responsable.nom}</p>
                    <p>---------------------- Termes d'emploi ----------------------</p>
                    <p>Date d'embauche: {termesEmploi && termesEmploi.dateEmbauche}</p>
                    <p>Type d'emploi: {termesEmploi && termesEmploi.typeEmploi}</p>
                    <p>Salaire de base: {termesEmploi && termesEmploi.salaire}</p>
                    <p>Bonus: {termesEmploi && termesEmploi.bonus}</p>

                </div>


            </div>
            <div className="w3-panel w3-center">
            <NavLink to="modifier" className="w3-btn w3-yellow w3-border" style={{width:"300px"}}>Modifier profile</NavLink> &nbsp;
            </div>
            
        </div>
    )
}