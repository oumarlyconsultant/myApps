import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import EmployeListe from "../../../components/personnel/EmployeListe"

export default function TousLesEmployes(){

    const employes = useLoaderData()
        
    return(
        <div className="touslesemployes">
        <div className="w3-cell" style={{width:"100%"}}>
            <h4>Liste de tous les employes actifs</h4>
            {employes.map(employe => (<div><EmployeListe prenom={employe.prenom} nom={employe.nom} poste={employe.poste} departement={employe.departement} numeroEmploye={employe.numeroEmploye}/><br/></div>))}
        </div>
        <div className="w3-container w3-cell" style={{width:"60%"}}>
        <Outlet />
        </div>
         </div>
    )

}