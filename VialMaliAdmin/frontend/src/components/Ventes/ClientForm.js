import React, { useState } from "react";
import CSRFToken from "../../../static/dist/js/csrftoken";
import axios from 'axios'

function ClientForm(){
    
    const [inputs,setInputs] = useState({});

    // const [prenom,setPrenom] = useState("")
    // const [nom,setNom] = useState("")
    // const [nomEntreprise,setNomEntreprise] = useState("")
    // const [adresse,setAdresse] = useState("")
    // const [ville,setVille] = useState("")
    // const [pays,setPays] = useState("")
    // const [telephone,setTelephone] = useState("")
    // const [email,setEmail] = useState("")
    // const [info,setInfo] = useState("")

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values,[name]:value}))
        // console.log("Form changed!")
        // console.log(name)
        // console.log(value)
    }
    
    const submitForm = (event) => {
        event.preventDefault()
        console.log("submitted")
    //     let formField = new FormData()

    //     formField.append('prenom',prenom)
    //     formField.append('nom',nom)
    //     formField.append('nomEntreprise',nomEntreprise)
    //     formField.append('adresse',adresse)
    //     formField.append('ville',ville)
    //     formField.append('pays',pays)
    //     formField.append('telephone',telephone)
    //     formField.append('email',email)
    //     formField.append('info',info)

    //     await axios({
    //         method: 'post',
    //         url: 'http://localhost:8000/api/',
    //         data: formField
    //     }).then((response) =>{
    //         console.log(response.data)
    //     })
    //     console.log("Form submitted!")
    // }
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {'Content-Type':'application/json'},
    //     body: JSON.stringify({
    //         prenom: inputs.prenom,
    //         nom: inputs.nom,
    //         nomEntreprise: inputs.nomEntreprise,
    //         adresse: inputs.adresse,
    //         telephone: inputs.telephone,
    //         email: inputs.email,
    //         info: inputs.info,
    //     })
    // };

    // console.log(fetch('http://localhost:8000/api/client/',requestOptions)).then((response) => response.json()).then((data) => console.log(data))

    
    // console.log(requestOptions['body'])
    }

    function cancelForm(event){

        event.preventDefault()
        console.log("form cancelled")
    }

    return(
        <div className="w3-card-4">

            <p></p>
            

            <div className="w3-container w3-blue">
               <h2>Enregistrer nouveau client</h2>
            </div>
            <form className="w3-container" method="post">
                <CSRFToken/>

                <label>Prenom</label>
                <input className="w3-input form-control" name="prenom" value={inputs.prenom||""} onChange={handleChange} type="text"/>

                <label>Nom</label>
                <input className="w3-input form-control" name="nom" value={inputs.nom||""} onChange={handleChange}  type="text"/>

                <label>Nom de l'entreprise</label>
                <input className="w3-input form-control" name="nomEntreprise" value={inputs.nomEntreprise||""} onChange={handleChange}  type="text"/>

                <label>Adresse</label>
                <input className="w3-input form-control" name="adresse" value={inputs.adresse||""} onChange={handleChange}  type="text"/>

                {/* <label>Ville</label>
                <input className="w3-input form-control" name="ville" value={inputs.ville||""} onChange={handleChange}  type="text"/>

                <label>Pays</label>
                <input className="w3-input form-control" name="pays" value={inputs.pays||""} onChange={handleChange}  type="text"/> */}

                <label>Numero de telephone</label>
                <input className="w3-input form-control" name="telephone" value={inputs.telephone||""} onChange={handleChange}  type="text"/>

                <label>Email</label>
                <input className="w3-input form-control" name="email" value={inputs.email||""} onChange={handleChange}  type="text"/>

                <label>Autres informations</label>
                <input className="w3-input form-control" name="info" value={inputs.info||""} onChange={handleChange}  type="text"/>

                <button className="w3-btn w3-blue" onClick={submitForm}>Enregistrer</button>
                &nbsp;
                <button className="w3-btn w3-gray" onClick={cancelForm}>Annuler</button>
                
            </form>

        </div>
    )
}

export default ClientForm;