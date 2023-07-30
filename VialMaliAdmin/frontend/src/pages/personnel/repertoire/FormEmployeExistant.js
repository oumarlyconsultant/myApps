import { useState } from "react"
import { Form, Link, NavLink, Outlet, redirect, useActionData, useLoaderData, useParams } from "react-router-dom"
import getAPIData from "../../../functions/getAPIData"

export default function FormEmployeExistant(){

    const {numeroEmploye} = useParams()

    const employes = useLoaderData()

    // console.log(numeroEmploye)
    const employe = employes.filter(obj => (obj.numeroEmploye == numeroEmploye || obj.id == numeroEmploye))[0]
    const termesEmploi = getAPIData('termesEmploi').filter(obj => (obj.employe == employe.id))[0]
    const villes = getAPIData('ville')//.filter(obj => (obj.id == employe.ville))[0]
    const postes = getAPIData('poste')//.filter(obj => (obj.id == employe.poste))[0]
    const departements = getAPIData('departement')//.filter(obj => (obj.id == employe.departement))[0]
    const responsables = getAPIData('employe')//.filter(obj => (obj.id == employe.responsable))[0]
    
    // const [searchKey,setSearchKey] = useState("")

    // const data = useActionData()

    const [newData,setNewData] = useState({
        prenom: employe.prenom,
        nom: employe.nom,
        dateNaissance: employe.dateNaissance,
        sexe: employe.sexe,
        adresseDomicile: employe.adresseDomicile,
        ville: employe.ville,
        telephone: employe.telephone
        // dateEmbauche: termesEmploi && termesEmploi.dateEmbauche,
        // typeEmploi: termesEmploi && termesEmploi.typeEmploi,
        // salaire: termesEmploi && termesEmploi.salaire,
        // bonus: termesEmploi && termesEmploi.bonus,
        // dateFinEmploi: termesEmploi && termesEmploi.dateFinEmploi,
        // raisonFinEmploi: termesEmploi && termesEmploi.raisonFinEmploi,
        // raisonFinDetails: termesEmploi && termesEmploi.raisonFinDetails        
    })

    console.log(newData)

    function handleChange(event){
        const {name,value} = event.target;
        setNewData(prevValues => {
            return {
                ...prevValues,
                [name]:value
            }
        })
    }

    // const villes = getAPIData('ville')
    // const postes = getAPIData('poste')
    // const departements = getAPIData('departement')
    // const responsables = getAPIData('employe')



    return(
        <div className="repertoire-employe-layout">    
                
                <div style={{width:"800px"}}>
                    {/* The selection content */}
                    <div className="w3-panel w3-text-white" style={{backgroundColor:"gray"}}><h3>Veuillez fournir les informations requises ci-dessous (<span style={{color:"red"}}>*</span>requis)</h3></div>
                    <Form method="post" action="/personnel/nouvel-employe">
                    <input className="w3-input" name="formName" type="hidden" value='formEmploye' />                    
                    <h5 className="w3-center"><em><u>Informations personnelles</u></em></h5>
                    <p>      
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Prenom*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="prenom" type="text" onChange={handleChange} value={newData.prenom}/></p>
                    <p>      
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Nom de famille*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="nom" type="text" onChange={handleChange} value={newData.nom} /></p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Date de naissance*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="dateNaissance" type="date" onChange={handleChange} value={newData.dateNaissance} /></p>
                    {/* <p>
                    <label className="w3-text-black"><b>Sexe</b></label>
                    <input className="w3-input w3-border w3-sand" name="sexe" type="text" value={formData.sexe || ""} /></p> */}
                    {/* <fieldset >
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Sexe*:</span></b></label> &nbsp;
                    <label>Homme &nbsp;
                    <input className="w3-radio" type="radio" name="sexe" value="H"/>
                    </label>&nbsp;        
                    <label>Femme &nbsp;
                    <input className="w3-radio" type="radio" name="sexe" value="F"/>
                    </label>
                    </fieldset> */}
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Adresse de domicile*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="adresseDomicile" type="text"  onChange={handleChange} value={newData.adresseDomicile}/></p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Ville*: </span></b></label>&nbsp;
                    <select name='villes' >
                    {villes.map(x => <option value={x.id}>{x.ville}</option>)}
                    </select>
                    </p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Numero de telephone principale*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="telephone" type="text"  onChange={handleChange} value={newData.telephone}/></p>
                    <p>
                    <label className="w3-text-black"><b>Numero de telephone alternatif</b></label>
                    <input className="w3-input w3-border w3-sand" name="telephone2" type="text"  onChange={handleChange} value={newData.telephone2}/></p>
                    <p>
                    <label className="w3-text-black"><b>Email</b></label>
                    <input className="w3-input w3-border w3-sand" name="email" type="email"  onChange={handleChange} value={newData.email}/></p>

                    <h5 className="w3-center"><em><u>Informations sur le poste</u></em></h5>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Poste*: </span></b></label>&nbsp;
                    <select name='poste' >
                    {postes.map(x => <option value={x.id}>{x.nom}</option>)}
                    </select>
                    </p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Departement*: </span></b></label>&nbsp;
                    <select name='departement' >
                    {departements.map(x => <option value={x.id}>{x.nom}</option>)}
                    </select>
                    </p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Responsable*: </span></b></label>&nbsp;
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

