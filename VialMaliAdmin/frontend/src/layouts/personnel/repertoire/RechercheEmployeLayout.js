import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom"
import EmployeListe from "../../../components/personnel/EmployeListe"

export default function RechercheEmployeLayout(){

    const {searchKey} = useParams()

    const employes = useLoaderData()

    // console.log(employes)

    // console.log(numeroEmploye)
    const resultats = employes.filter(employe => (employe.prenom.toLowerCase().includes(searchKey.toLowerCase()) || employe.nom.toLowerCase().includes(searchKey.toLowerCase())))
    return(
        <div className="resultat-recherche-employe">
        <div className="w3-cell" style={{width:"100%"}}>
            <h4>Resultats de la recherche de: <strong>{searchKey}</strong></h4>
            {resultats.map(employe => (<div><EmployeListe prenom={employe.prenom} nom={employe.nom} poste={employe.poste} departement={employe.departement} numeroEmploye={employe.numeroEmploye}/><br/></div>))}
        </div>
        <div className="w3-container w3-cell" style={{width:"60%"}}>
        <Outlet />
        </div>
         </div>
    )

}