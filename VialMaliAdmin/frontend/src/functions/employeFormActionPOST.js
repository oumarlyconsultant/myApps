// import { useState } from "react";
// import { Navigate, redirect } from "react-router-dom"
import { redirect } from "react-router-dom";
import sendEmployeFormData from "./sendEmployeFormData"
import getAPIData from "../functions/getAPIData"

export const employeFormActionPOST = async({ request }) => {

    //Save the form data
    const data = await request.formData()  
    const endpoint = 'http://localhost:8000/api/employe/'; 
    
    // const [message, setMessage] = useState("");

    const submission = {
        prenom: data.get('prenom'),
        nom: data.get('nom'),
        sexe: data.get('sexe'),
        adresseDomicile: data.get('adresseDomicile'),
        ville: data.get('ville'),
        telephone: data.get('telephone'),
        telephone2: data.get('telephone2'),
        email: data.get('email'),
        poste: data.get('poste'),
        departement: data.get('departement'),
        responsable: data.get('responsable')
    }

    // console.log(submission) 

    //Send post request [and retrieve the employe info]

    sendEmployeFormData(data,endpoint)

    return redirect('')

    //reload employe database


    // const resJson = await res.json();
    // if (res.status === 200) {
    //     setMessage("Employe ajoute avec SUCCES!")
    // }
    // else{
    //     setMessage("ERREUR dans l'ajout de l'employe.")
    // }

    // window.location.replace("http://localhost:8000/personnel/repertoire")

    // return <Navigate to='/personnel/repertoire' />
    
}