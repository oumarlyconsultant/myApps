import React,{useState,useEffect} from "react";
import sendFormData from "../myFunctions/sendFormData";
import axios from "axios";
import ProfilEmploye from "./ProfilEmploye";

function AjouterEmploye(){

    //To get data from database to pre-populate fields for selection
    const endpointC1 = 'http://localhost:8000/api/ville/';
    const [objAll1,setObjAll1] = useState([]);

    useEffect(() => {
        axios.get(endpointC1).then((response) =>{
            setObjAll1(response.data);
        })
    },[])

    const endpointC2 = 'http://localhost:8000/api/poste/';
    const [objAll2,setObjAll2] = useState([]);

    useEffect(() => {
        axios.get(endpointC2).then((response) =>{
            setObjAll2(response.data);
        })
    },[])

    const endpointC3 = 'http://localhost:8000/api/departement/';
    const [objAll3,setObjAll3] = useState([]);

    useEffect(() => {
        axios.get(endpointC3).then((response) =>{
            setObjAll3(response.data);
        })
    },[])

    const endpointC4 = 'http://localhost:8000/api/employe/';
    const [objAll4,setObjAll4] = useState([]);

    useEffect(() => {
        axios.get(endpointC4).then((response) =>{
            setObjAll4(response.data);
        })
    },[])


    //To send form data
    const endpointP = 'http://localhost:8000/api/employe/';
    const [formData,setFormData] = useState({})

    function handleChange(event){
        const {value,name} = event.target

        setFormData(prevValues => {
            return {...prevValues, [name]: value}
        })
        console.log(name)
        console.log(value)

    }

    return(
    <div className="w3-card-4 myform">
    <div className="w3-container w3-brown">
        <h4>Remplissez le formulaire avec les informations du nouvel employe</h4>
    </div>
    
    <form className="w3-container" onSubmit={handleSubmit} method="post" >
        <h5 className="w3-center"><em><u>Informations personnelles</u></em></h5>
        <p>      
        <label className="w3-text-black"><b>Nom de famille</b></label>
        <input className="w3-input w3-border w3-sand" name="nom" type="text" onChange={handleChange}/></p>
        <p>      
        <label className="w3-text-black"><b>Prenom</b></label>
        <input className="w3-input w3-border w3-sand" name="prenom" type="text" onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Date de naissance</b></label>
        <input className="w3-input w3-border w3-sand" name="dateNaissance" type="date" onChange={handleChange}/></p>
        {/* <p>
        <label className="w3-text-black"><b>Sexe</b></label>
        <input className="w3-input w3-border w3-sand" name="sexe" type="text" value={formData.sexe || ""} onChange={handleChange}/></p> */}
        <fieldset onChange={handleChange}>
        <label className="w3-text-black"><b>Sexe:</b></label> &nbsp;
        <label>Homme &nbsp;
        <input className="w3-radio" type="radio" name="sexe" value="H"/>
        </label>&nbsp;        
        <label>Femme &nbsp;
        <input className="w3-radio" type="radio" name="sexe" value="F"/>
        </label>
        </fieldset>
        <p>
        <label className="w3-text-black"><b>Adresse de domicile</b></label>
        <input className="w3-input w3-border w3-sand" name="adresseDomicile" type="text" onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Ville: </b></label>&nbsp;
        <select name="ville" onChange={handleChange}>
        {objAll1.map(x => <option value={x.id}>{x.ville}</option>)}
        </select>
        </p>
        {/* <p>
        <label className="w3-text-black"><b>Pays</b></label>&nbsp;
        <select value={formData.pays} onChange={handleChange}>
        {objAll1.map(x => <option>{x.pays}</option>)}
        </select>
        </p> */}
        <p>
        <label className="w3-text-black"><b>Numero de telephone principale</b></label>
        <input className="w3-input w3-border w3-sand" name="telephone" type="text" onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Numero de telephone alternatif</b></label>
        <input className="w3-input w3-border w3-sand" name="telephone2" type="text" onChange={handleChange}/></p>
        <p>
        <label className="w3-text-black"><b>Email</b></label>
        <input className="w3-input w3-border w3-sand" name="email" type="email" onChange={handleChange}/></p>

        <h5 className="w3-center"><em><u>Informations sur l'emploi</u></em></h5>
        <p>
        <label className="w3-text-black"><b>Poste: </b></label>&nbsp;
        <select name='poste' onChange={handleChange}>
        {objAll2.map(x => <option value={x.id}>{x.nom}</option>)}
        </select></p>
        <p>
        <label className="w3-text-black"><b>Departement: </b></label>&nbsp;
        <select name='departement' onChange={handleChange}>
        {objAll3.map(x => <option value={x.id}>{x.nom}</option>)}
        </select></p>
        <p>
        <label className="w3-text-black"><b>Responsable: </b></label>&nbsp;
        <select name='responsable' onChange={handleChange}>
        {objAll4.map(x => <option value={x.id}>{x.prenom}&nbsp;{x.nom}</option>)}
        </select></p>
        <p>
            <div style={{textAlign:"center"}}>
                <button className="w3-btn w3-purple" style={{width:"25%"}} name="action" type="submit">Enregistrer</button>&nbsp;
                <button className="w3-btn w3-grey" style={{width:"12.5%"}}>Annuler</button>
            </div>

        </p>
    </form>
    </div>
    )

}

export default AjouterEmploye;