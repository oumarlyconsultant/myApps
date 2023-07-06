// import { useState } from "react";
// import { Navigate, redirect } from "react-router-dom"
import { redirect } from "react-router-dom";
import sendTermesEmploiFormData from "./sendTermesEmploiFormData"
import getAPIData from "./getAPIData"

export const employeFormActionPOST = async({ request }) => {

    //Save the form data
    const data = await request.formData()  
    const endpoint = 'http://localhost:8000/api/termesEmploi/'; 
    
    // const [message, setMessage] = useState("");

    const submission = {
        dateEmbauche: data.get('dateEmbauche'),
        dateFinEmploi: data.get('dateFinEmploi'),
        raisonFinEmploi: data.get('raisonFinEmploi'),
        raisonFinDetails: data.get('raisonFinDetails'),
        typeEmploi: data.get('typeEmploi'),
        salaire: data.get('salaire'),
        bonus: data.get('bonus')
    }

    // console.log(submission) 

    //Send post request [and retrieve the employe info]

    sendTermesEmploiFormData(data,endpoint)

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