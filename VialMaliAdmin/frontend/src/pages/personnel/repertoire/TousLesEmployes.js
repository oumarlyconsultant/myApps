import { useState } from "react"
import { Link, NavLink, useLoaderData } from "react-router-dom"
import EmployeListe from "../../../components/EmployeListe"

export default function TousLesEmployes(){

    const employes = useLoaderData()

    return(
        <div className="touslesemployes">
        <h4>Liste de tous les employes actifs</h4>
        {employes.map(employe => (<div><EmployeListe prenom={employe.prenom} nom={employe.nom} poste={employe.poste} departement={employe.departement} numeroEmploye={employe.numeroEmploye} /><br/></div>))}
        </div>
    )

}