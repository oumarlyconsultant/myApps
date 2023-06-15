import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import EmployeListe from "../../../components/EmployeListe"

export default function TousLesEmployes(){

    const employes = useLoaderData()

    const [thisNumeroEmploye,setThisNumeroEmploye] = useState('')


    function getNumeroEmploye(numEmp){
        setThisNumeroEmploye(numEmp)
        }
        
    return(
        <div className="touslesemployes w3-container">
        <div className="w3-container w3-cell" style={{width:"800px"}}>
            <h4>Liste de tous les employes actifs</h4>
            {employes.map(employe => (<div><EmployeListe prenom={employe.prenom} nom={employe.nom} poste={employe.poste} departement={employe.departement} numeroEmploye={employe.numeroEmploye} onClick={getNumeroEmploye}/><br/></div>))}
        </div>
        <div className="w3-container w3-cell">
        <Outlet context = {thisNumeroEmploye} />
        </div>
         </div>
    )

}