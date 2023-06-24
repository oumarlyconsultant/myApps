import { useEffect, useState, useMemo } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import Table from "../../components/Table"

export default function RepertoireEmployesLayout(){

    const employes = useLoaderData()

    const columns = useMemo(
        () => [
            {
                Header: " ",
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
                    },
                    {
                        Header: "Numero d'employe",
                        accessor: "numeroEmploye"
                    }
                ]
            }
        ],[]
    )

    return(
        <div className="repertoire-employe-layout">
            <div class="w3-container">    
                       
                {/* The selection header */}
                <div className="repertoire-employes-header w3-panel w3-khaki w3-padding w3-round-large">
                    <h2 class="w3-text-black w3-bold"><strong>Repertoire des employes</strong></h2>
                </div>

                {/* The selection content */}

                <p></p>

                <div className="w3-container w3-cell" style={{width:"1000px"}}>
                    <Table columns={columns} data={employes} search="prenom" key="numeroEmploye"/>
                </div>

                <Outlet />
                
            </div>
        </div>
    )

}