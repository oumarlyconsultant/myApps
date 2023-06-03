import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowFields from "../myFunctions/ShowFields"
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
                <table className="w3-table w3-striped">
                <tr className="w3-grey">
                    <th>Prenom</th>
                    <th>Nom</th>
                    <th>Poste</th>
                    <th>Departement</th>
                </tr>
                {searchResults.map(x => <ShowFields key={x.numeroEmploye} fieldA={x.prenom} fieldB={x.nom} fieldC={x.poste} fieldD={x.departement}/>)}
                </table>
            )
            }
        else if(props.searchKey=='') return("Veuillez entrez une valeur a rechercher")
    }
    else if(props.mode=='all') return(
        <div>
            <table className="w3-table w3-striped">
            <tr className="w3-grey">
                <th>Prenom</th>
                <th>Nom</th>
                <th>Poste</th>
                <th>Departement</th>
            </tr>
            {objAll.map(x => <ShowFields key={x.numeroEmploye} fieldA={x.prenom} fieldB={x.nom} fieldC={x.poste} fieldD={x.departement}/>)}
            </table>
            <RetrieveAPIData entity="employe" data='this' id='3' />
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