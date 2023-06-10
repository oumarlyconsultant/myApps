import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayResults from "./DisplayResults"
import RetrieveAPIData from "../myFunctions/RetrieveAPIData"

function EmployesExistants_p2(props){

    const endpoint = 'http://localhost:8000/api/employe/';
    const [objAll,setObjAll] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) =>{
            setObjAll(response.data);
        })
    },[])

    if (objAll.length == 0) return("Pas d'employe dans la base.")
    else if(props.mode=="search") {
        if(props.searchKey!='') {
            let searchResults = objAll.filter(s => (s.nom.includes(props.searchKey) || s.prenom.includes(props.searchKey)))
            return(
                <div>
                    <p>Clicker sur le prenom/nom de l'employe pour plus d'information</p>
                    <table className="w3-table w3-striped mytable">
                    <tr className="w3-grey">
                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Poste</th>
                        <th>Departement</th>
                    </tr>
                    {searchResults.map(x => <DisplayResults key={x.numeroEmploye} id={x.id} numEmp={x.numeroEmploye} prenom={x.prenom} nom={x.nom} poste={x.poste} departement={x.departement}/>)}
                    </table>

                </div>

            )
            }
        else if(props.searchKey=='') return("Veuillez entrez une valeur a rechercher")
    }
    else if(props.mode=='all') return(
        <div>
            <p>Clicker sur le prenom/nom de l'employe pour plus d'information</p>
            <table className="w3-table w3-striped mytable">
            <tr className="w3-grey">
                <th>Prenom</th>
                <th>Nom</th>
                <th>Poste</th>
                <th>Departement</th>
            </tr>
            {objAll.map(x => <DisplayResults key={x.numeroEmploye} id={x.id} numEmp={x.numeroEmploye} prenom={x.prenom} nom={x.nom} poste={x.poste} departement={x.departement}/>)}
            </table>
        </div>

    )
    // {
    //     const searchResults = []

    //     searchResults = objAll.filter(s => (s.nom.includes(props.searchKey) || s.prenom.includes(props.searchKey)))

    //     return(
    //         searchResults.map(x => {
    //             x.prenom
    //         })
    //     )
    //     }

    // else if(props.mode==="all") return(
    //     "DDd"

    //     )

}

export default EmployesExistants_p2;