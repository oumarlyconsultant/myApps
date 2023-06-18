import { useState } from "react"
import { Form, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"

export default function NouvelEmployeLayout(){

    const [searchKey,setSearchKey] = useState("")

    function handleChange(event){
        let e = event.target.value
        setSearchKey(e)
    }

    return(
        <div className="repertoire-employe-layout">
            <div class="w3-container">    
                
                {/* The selection header */}
                <div className="repertoire-employes-header w3-panel w3-khaki w3-padding w3-round-large">
                <h2 class="w3-text-black w3-bold"><strong>Ajouter un(e) nouvel(le) employe(e)</strong></h2>
                </div>
                
                <div style={{width:"800px"}}>
                    {/* The selection content */}
                    <div className="w3-panel w3-text-white" style={{backgroundColor:"gray"}}><h3>Veuillez fournir les informations requises ci-dessous</h3></div>
                    <Form method="post" action="personnel/ajouter/:numeroEmploye">
                    <h5 className="w3-center"><em><u>1. Informations personnelles</u></em></h5>
                    <p>      
                    <label className="w3-text-black"><b>Nom de famille</b></label>
                    <input className="w3-input w3-border w3-sand" name="nom" type="text" /></p>
                    <p>      
                    <label className="w3-text-black"><b>Prenom</b></label>
                    <input className="w3-input w3-border w3-sand" name="prenom" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Date de naissance</b></label>
                    <input className="w3-input w3-border w3-sand" name="dateNaissance" type="date" /></p>
                    {/* <p>
                    <label className="w3-text-black"><b>Sexe</b></label>
                    <input className="w3-input w3-border w3-sand" name="sexe" type="text" value={formData.sexe || ""} /></p> */}
                    <fieldset >
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
                    <input className="w3-input w3-border w3-sand" name="adresseDomicile" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Ville: </b></label>&nbsp;
                    <select name="ville" >
                    {/* {objAll1.map(x => <option value={x.id}>{x.ville}</option>)} */}
                    </select>
                    </p>
                    {/* <p>
                    <label className="w3-text-black"><b>Pays</b></label>&nbsp;
                    <select value={formData.pays} >
                    {objAll1.map(x => <option>{x.pays}</option>)}
                    </select>
                    </p> */}
                    <p>
                    <label className="w3-text-black"><b>Numero de telephone principale</b></label>
                    <input className="w3-input w3-border w3-sand" name="telephone" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Numero de telephone alternatif</b></label>
                    <input className="w3-input w3-border w3-sand" name="telephone2" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Email</b></label>
                    <input className="w3-input w3-border w3-sand" name="email" type="email" /></p>

                    <h5 className="w3-center"><em><u>2. Informations du poste</u></em></h5>
                    <p>
                    <label className="w3-text-black"><b>Poste: </b></label>&nbsp;
                    <select name='poste' >
                    {/* {objAll2.map(x => <option value={x.id}>{x.nom}</option>)} */}
                    </select></p>
                    <p>
                    <label className="w3-text-black"><b>Departement: </b></label>&nbsp;
                    <select name='departement' >
                    {/* {objAll3.map(x => <option value={x.id}>{x.nom}</option>)} */}
                    </select></p>
                    <p>
                    <label className="w3-text-black"><b>Responsable: </b></label>&nbsp;
                    <select name='responsable' >
                    {/* {objAll4.map(x => <option value={x.id}>{x.prenom}&nbsp;{x.nom}</option>)} */}
                    </select></p>
                    <button className="w3-btn w3-blue" style={{width:"500px"}} name="action" type="submit">Enregistrer</button>&nbsp;
                    <button className="w3-btn w3-light-grey" style={{width:"200px"}}>Annuler</button>
                    </Form>

                    <p></p>
                </div>
   
                <Outlet />
                
            </div>
        </div>
    )

}