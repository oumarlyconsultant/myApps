// import { useState } from "react";
// import { Navigate, redirect } from "react-router-dom"
import { redirect } from "react-router-dom";
import getAPIData from "../getAPIData";
// import sendFormData from "./sendEmployeFormData";
import sendEmployeExistantFormData from "./sendEmployeExistantFormData"
import sendTermesEmploiExistantFormData from "./sendTermesEmploiExistantFormData"
// import getAPIData from "../functions/getAPIData"

export const employeExistantFormActionPOST = async({ request }) => {

    //Save the form data
    const data = await request.formData()  

    if(data.get('formName') == 'formEmploye') {
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

        sendEmployeExistantFormData(data,endpoint)

        return redirect('')

    }
    else if(data.get('formName') == 'formTermesEmploi'){

        const endpoint = 'http://localhost:8000/api/termesEmploi/'; 
    
        // const [message, setMessage] = useState("");
    
        const submission = {
            employe: data.get('employe'),
            dateEmbauche: data.get('dateEmbauche'),
            dateFinEmploi: data.get('dateFinEmploi'),
            raisonFinEmploi: data.get('raisonFinEmploi'),
            raisonFinDetails: data.get('raisonFinDetails'),
            typeEmploi: data.get('typeEmploi'),
            salaire: data.get('salaire'),
            bonus: data.get('bonus')
        }

   
        // const useHook = () => {
        //     thisEmploye = getAPIData('employe','specific',data.get('employe'))
        // }
        // useHook()
        // console.log(submission) 
    
        //Send post request [and retrieve the employe info]
    
        sendTermesEmploiExistantFormData(data,endpoint)
    
        return redirect('')
    }


    

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