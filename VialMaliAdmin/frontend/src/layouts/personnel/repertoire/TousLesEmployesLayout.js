import { useEffect, useState, useMemo } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
// import EmployeListe from "../../../components/personnel/EmployeListe"
import Table from "../../../components/Table"

export default function TousLesEmployesLayout(){

    const employes = useLoaderData()

    const columns = useMemo(
        () => [
            {
                Header: "Liste des employes",
                columns: [
                    {
                        Header: "Prenom",
                        accessor: "prenom"
                    },
                    {
                        Header: "Nom",
                        accessor: "nom"
                    },
                    {
                        Header: "Poste",
                        accessor: "poste"
                    },
                    {
                        Header: "Departement",
                        accessor: "departement"
                    }
                ]
            }
        ],[]
    )
    // console.log(employes)
    console.log(columns)
        
    return(
        <div className="touslesemployes">
        <div className="w3-cell" style={{width:"100%"}}>
            <Table columns={columns} data={employes}/>
            {/* <h4>Liste de tous les employes actifs</h4>
            {employes.map(employe => (<div><EmployeListe prenom={employe.prenom} nom={employe.nom} poste={employe.poste} departement={employe.departement} numeroEmploye={employe.numeroEmploye}/><br/></div>))} */}
        </div>
        <div className="w3-container w3-cell" style={{width:"60%"}}>
        <Outlet /> 
        </div>
         </div>
    )

}