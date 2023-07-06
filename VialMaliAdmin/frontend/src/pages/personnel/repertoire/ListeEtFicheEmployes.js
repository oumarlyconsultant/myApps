import { useEffect, useState, useMemo } from "react"
import { Link, NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom"
// import Table from "../../components/ReactTable"

export default function ListeEtFicheEmployes(){

    const employes = useLoaderData()

    const [listeEmployes,setListeEmploye]  = useState([])

    // const [selectedEmploye,setSelectedEmploye] = useState("")

    const navigate = useNavigate()

    function selectionEmploye(numEmp){
        // setSelectedEmploye(numEmp)
        navigate(numEmp)
    }

    function search(event){
        const searchKey = event.target.value
        console.log(searchKey)
        setListeEmploye(employes.filter((employe) => (employe.prenom.toLowerCase==searchKey)))
    }
    
    return(
        <div className="repertoire-employe-layout">
                  <div class="the-employe-table w3-cell" style={{width:"50%"}}>
                    <input
                        // value={filterInput}
                        onChange={search}
                        placeholder={"Recherchez nom ou prenom de l'employe"}
                        style={{width:"100%"}}
                    />
                    <p></p>

                    <table class="w3-table-all">
                        <thead>
                            <tr class="w3-light-grey">
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Poste</th>
                            <th>Departement</th>
                            </tr>
                        </thead>

                        {employes.map(employe => (
                            <tr onClick={() => selectionEmploye(employe.numeroEmploye)}>
                                <td>{employe.prenom}</td>
                                <td>{employe.nom}</td>
                                <td>{employe.poste}</td>
                                <td>{employe.departement}</td>
                            </tr>))}

                    </table>
                </div>
                
                <div class="the-employe-details w3-container w3-cell" style={{width:"1000px"}}>
                    <Outlet />
                </div>
        </div>
    )

}