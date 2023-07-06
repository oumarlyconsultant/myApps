import { useState } from "react"
import { Form, Link, NavLink, Outlet, redirect, useActionData, useLoaderData, useParams } from "react-router-dom"
import getAPIData from "../../../functions/getAPIData"
export default function TermesEmploi(){

    const {numeroEmploye} = useParams()

    const employes = useLoaderData()

    // console.log(numeroEmploye)
    const employe = employes.filter(employe => (employe.numeroEmploye == numeroEmploye))[0]

    return(
        <div className="repertoire-employe-layout">    
                
                <div style={{width:"800px"}}>
                    {/* The selection content */}
                    <div className="w3-panel w3-text-white" style={{backgroundColor:"gray"}}><h3>Veuillez fournir les informations requises ci-dessous (*requis)</h3></div>
                    <Form method="post" action="/personnel/nouvel-employe">
                    <h5 className="w3-center"><em><u>3. Termes d'emploi</u><b> [{employe.prenom} {employe.nom}]</b></em></h5>
                    <p>      
                    <label className="w3-text-black"><b>Date d'embauche*</b></label>
                    <input className="w3-input w3-border w3-sand" name="dateEmbauche" type="date" /></p>
                    <fieldset >
                    <label className="w3-text-black"><b>Type d'emploi*:</b></label> &nbsp;
                    <label>Permanent &nbsp;
                    <input className="w3-radio" type="radio" name="typeEmploi" value="P"/>
                    </label>&nbsp;        
                    <label>Contractuel &nbsp;
                    <input className="w3-radio" type="radio" name="typeEmploi" value="C"/>
                    </label>
                    </fieldset>
                    <p>
                    <label className="w3-text-black"><b>Salaire de base*</b></label>
                    <input className="w3-input w3-border w3-sand" name="salaire" type="text" /></p>
                    <p>
                    <label className="w3-text-black"><b>Bonus</b></label>
                    <input className="w3-input w3-border w3-sand" name="bonus" type="text" /></p>
                    <button className="w3-btn w3-green" style={{width:"500px"}} name="action" type="submit">Soumettre</button>&nbsp;
                    <button className="w3-btn w3-light-grey" style={{width:"200px"}}>Annuler</button>
                    </Form>

                    <p></p>
                </div>
        </div>
    )

}

