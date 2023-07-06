import { useState } from "react"
import { Form, Link, NavLink, Outlet, redirect, useActionData, useLoaderData } from "react-router-dom"
import getAPIData from "../../../functions/getAPIData"

export default function NouvelEmploye(){

    //Retrieve data
    //Ville
    

    const [searchKey,setSearchKey] = useState("")

    const data = useActionData()

    function handleChange(event){
        let e = event.target.value
        setSearchKey(e)
    }

    const villes = getAPIData('ville','all')
    const postes = getAPIData('poste','all')
    const departements = getAPIData('departement','all')
    const responsables = getAPIData('employe','all')


    return(
        <div className="repertoire-employe-layout">    
                
                <div style={{width:"800px"}}>
                    {/* The selection content */}
                    <div className="w3-panel w3-text-white" style={{backgroundColor:"gray"}}><h3>Veuillez fournir les informations requises ci-dessous (*requis)</h3></div>
                    <Form method="post" action="/personnel/nouvel-employe">
                    <h5 className="w3-center"><em><u>1. Informations personnelles</u></em></h5>
                    <p>      
                    <label className="w3-text-black"><b>Prenom*</b></label>
                    <input className="w3-input w3-border w3-sand" name="prenom" type="text" /></p>
                    <p>      
                    <label className="w3-text-black"><b>Nom de famille*</b></label>
                    <input className="w3-input w3-border w3-sand" name="nom" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Date de naissance*</b></label>
                    <input className="w3-input w3-border w3-sand" name="dateNaissance" type="date" /></p>
                    {/* <p>
                    <label className="w3-text-black"><b>Sexe</b></label>
                    <input className="w3-input w3-border w3-sand" name="sexe" type="text" value={formData.sexe || ""} /></p> */}
                    <fieldset >
                    <label className="w3-text-black"><b>Sexe*:</b></label> &nbsp;
                    <label>Homme &nbsp;
                    <input className="w3-radio" type="radio" name="sexe" value="H"/>
                    </label>&nbsp;        
                    <label>Femme &nbsp;
                    <input className="w3-radio" type="radio" name="sexe" value="F"/>
                    </label>
                    </fieldset>
                    <p>
                    <label className="w3-text-black"><b>Adresse de domicile*</b></label>
                    <input className="w3-input w3-border w3-sand" name="adresseDomicile" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Ville*: </b></label>&nbsp;
                    <select name='villes' >
                    {villes.map(x => <option value={x.id}>{x.ville}</option>)}
                    </select>
                    </p>
                    <p>
                    <label className="w3-text-black"><b>Numero de telephone principale*</b></label>
                    <input className="w3-input w3-border w3-sand" name="telephone" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Numero de telephone alternatif</b></label>
                    <input className="w3-input w3-border w3-sand" name="telephone2" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Email</b></label>
                    <input className="w3-input w3-border w3-sand" name="email" type="email" /></p>

                    <h5 className="w3-center"><em><u>2. Informations sur le poste</u></em></h5>
                    <p>
                    <label className="w3-text-black"><b>Poste*: </b></label>&nbsp;
                    <select name='poste' >
                    {postes.map(x => <option value={x.id}>{x.nom}</option>)}
                    </select>
                    </p>
                    <p>
                    <label className="w3-text-black"><b>Departement*: </b></label>&nbsp;
                    <select name='departement' >
                    {departements.map(x => <option value={x.id}>{x.nom}</option>)}
                    </select>
                    </p>
                    <p>
                    <label className="w3-text-black"><b>Responsable*: </b></label>&nbsp;
                    <select name='responsable' >
                    {responsables.map(x => <option value={x.id}>{x.prenom} {x.nom}</option>)}
                    </select>
                    </p>
                    <button className="w3-btn w3-blue" style={{width:"500px"}} name="action" type="submit">Suivant (termes d'emploi) <i class="fa fa-arrow-right" aria-hidden="true"/></button>&nbsp;
                    <button className="w3-btn w3-light-grey" style={{width:"200px"}}>Annuler</button>
                    </Form>

                    <p></p>
                </div>
        </div>
    )

}

