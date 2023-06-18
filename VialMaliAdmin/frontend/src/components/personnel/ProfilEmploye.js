import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfilEmploye(props){

    const endpoint = 'http://localhost:8000/api/employe/';
    const [objAll,setObjAll] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) =>{
            setObjAll(response.data);
        })
    },[])

    const thisEmploye = objAll.filter(s => (s.id == props.id))[0]

    return(
    <p>OUMAR!</p>
    )

    // if(thisEmploye) console.log(thisEmploye)
    // return(
    //     <div className="w3-container w3-light-blue">
    //         <p><strong>Numero d'employe: </strong>{thisEmploye.numeroEmploye}</p>
    //         <p><strong>Nom complet: </strong>{thisEmploye.prenom} &nbsp; {thisEmploye.nom}</p>
    //         <p><strong>Date de naissance: </strong>{thisEmploye.dateNaissance}</p>
    //         <p><strong>Sexe: </strong>{thisEmploye.sexe}</p>
    //         <p><strong>Adresse de domicile: </strong>{thisEmploye.adresseDomicile}</p>
    //         <p><strong>Numero(s) de telephone: </strong>{thisEmploye.telephone} / {thisEmploye.telephone2}</p>
    //         <p><strong>Email: </strong>{thisEmploye.email}</p>
    //         <p><strong>Poste: </strong>{thisEmploye.poste}</p>
    //         <p><strong>Departement: </strong>{thisEmploye.departement}</p>
    //         <p><strong>Responsable: </strong>{thisEmploye.responsable}</p>
    //     </div>
    // )
    // else return("Une erreur s'est produite!")

}

export default ProfilEmploye;