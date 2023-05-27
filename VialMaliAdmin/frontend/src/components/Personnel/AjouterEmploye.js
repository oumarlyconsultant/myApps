import React,{useState,useEffect} from "react";
import sendFormData from "../myFunctions/sendFormData";

function AjouterEmploye(){

    const endpoint = 'http://localhost:8000/api/employe/';
    const [formData,setFormData] = useState({})
    

    function handleChange(event){
        const {value,name} = event.target

        setFormData(prevValues => {
            return {...prevValues, [name]: value}
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        sendFormData(formData,endpoint)
    }

    return(
    <div className="w3-card-4 myform" id='employeForm'>
    <div className="w3-container w3-brown">
        <h4>Remplissez le formulaire avec les informations du nouvel employe</h4>
    </div>
    
    <form className="w3-container" onSubmit={handleSubmit} method="post" >
        <h5 className="w3-center"><em><u>Informations personnelles</u></em></h5>
        <p>      
        <label className="w3-text-black"><b>Nom de famille</b></label>
        <input className="w3-input w3-border w3-sand" name="nom" type="text" value={formData.nom || ""} onChange={handleChange}/></p>
        <p>      
        <label className="w3-text-black"><b>Prenom</b></label>
        <input className="w3-input w3-border w3-sand" name="prenom" type="text" value={formData.prenom || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Date de naissance</b></label>
        <input className="w3-input w3-border w3-sand" name="dateNaissance" type="date" value={formData.dateNaissance || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Sexe</b></label>
        <input className="w3-input w3-border w3-sand" name="sexe" type="text" value={formData.sexe || ""} onChange={handleChange}/></p>
        {/* <p>
        <label className="w3-text-black"><b>Sexe:</b></label> &nbsp;
        <input className="w3-radio" type="radio" name="homme" value="homme"/>
        <label>&nbsp;Homme</label>&nbsp;
        <input className="w3-radio" type="radio" name="femme" value="femme"/>
        <label>&nbsp;Femme</label></p> */}
        <p>
        <label className="w3-text-black"><b>Adresse de domicile</b></label>
        <input className="w3-input w3-border w3-sand" name="adresseDomicile" type="text" value={formData.adresseDomicile || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Ville</b></label>
        <input className="w3-input w3-border w3-sand" name="ville" type="text" value={formData.ville || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Pays</b></label>
        <input className="w3-input w3-border w3-sand" name="pays" type="text" value={formData.pays || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Numero de telephone principale</b></label>
        <input className="w3-input w3-border w3-sand" name="telephone" type="text" value={formData.telephone || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Numero de telephone alternatif</b></label>
        <input className="w3-input w3-border w3-sand" name="telephone2" type="text" value={formData.telephone2 || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Email</b></label>
        <input className="w3-input w3-border w3-sand" name="email" type="email" value={formData.email || ""} onChange={handleChange}/></p>
        <h5 className="w3-center"><em><u>Informations sur l'emploi</u></em></h5>
        <p>
        <label className="w3-text-black"><b>Poste</b></label>
        <input className="w3-input w3-border w3-sand" name="poste" type="text" value={formData.poste || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Departement</b></label>
        <input className="w3-input w3-border w3-sand" name="departement" type="text" value={formData.departement || ""} onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Responsable</b></label>
        <input className="w3-input w3-border w3-sand" name="responsable" type="text" value={formData.responsable || ""} onChange={handleChange}/></p>
        <p>
        <button className="w3-btn w3-brown" name="action" type="submit">Enregistrer</button>&nbsp;
        <button className="w3-btn w3-grey">Annuler</button>
        </p>
    </form>
    </div>
    )

}

export default AjouterEmploye;