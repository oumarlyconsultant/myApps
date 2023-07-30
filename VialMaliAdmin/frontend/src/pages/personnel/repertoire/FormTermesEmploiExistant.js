import { useState } from "react"
import { Form, Link, NavLink, Outlet, redirect, useActionData, useLoaderData, useParams } from "react-router-dom"
import getAPIData from "../../../functions/getAPIData"

export default function FormTermesEmploiExistant(){

    const {id} = useParams()

    const termesEmplois = useLoaderData()

    // console.log(numeroEmploye)
    const termesEmploi = termesEmplois.filter(obj => (obj.employe == id))[0]
    
    // const [searchKey,setSearchKey] = useState("")

    // const data = useActionData()

    const [newData,setNewData] = useState({
        employe: id,
        dateEmbauche: termesEmploi.dateEmbauche,
        typeEmploi: termesEmploi.typeEmploi,
        salaire: termesEmploi.salaire,
        bonus: termesEmploi.bonus,
        dateFinEmploi: termesEmploi.dateFinEmploi,
        raisonFinEmploi: termesEmploi.raisonFinEmploi,
        raisonFinDetails: termesEmploi.raisonFinDetails        
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
                    <h5 className="w3-center"><em><u>Termes d'emploi</u></em></h5>
                    <p>
                    <input className="w3-input w3-border w3-sand" name="employe" type="hidden" value={employe.id} readOnly /></p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Salaire de base*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="salaire" type="text"  onChange={handleChange} value={newData.salaire} /></p>
                    <p>
                    <label className="w3-text-black"><b>Bonus</b></label>
                    <input className="w3-input w3-border w3-sand" name="bonus" type="text"  onChange={handleChange} value={newData.bonus} /></p>                    
                    <fieldset >
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Type d'emploi*:</span></b></label> &nbsp;
                    <label>Permanent &nbsp;
                    <input className="w3-radio" type="radio" name="typeEmploi" value="P"/>
                    </label>&nbsp;        
                    <label>Contractuel &nbsp;
                    <input className="w3-radio" type="radio" name="typeEmploi" value="C"/>
                    </label>
                    </fieldset>
                    <p>      
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Date d'embauche*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="dateEmbauche" type="date" onChange={handleChange} value={newData.dateEmbauche} /></p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Date de fin d'emploi*</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="dateFinEmploi" type="date" onChange={handleChange} value={newData.dateFinEmploi} /></p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Raison de fin d'emploi</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="raisonFinEmploi" type="text"  onChange={handleChange} value={newData.raisonFinEmploi} /></p>
                    <p>
                    <label className="w3-text-black"><b><span style={{color:"red"}}>Raison de fin d'emploi (details)</span></b></label>
                    <input className="w3-input w3-border w3-sand" name="raisonFinDetails" type="text"  onChange={handleChange} value={newData.raisonFinDetails} /></p>
                    

                    <button className="w3-btn w3-green" style={{width:"500px"}} name="action" type="submit">Soumettre</button>&nbsp;
                    <button className="w3-btn w3-light-grey" style={{width:"200px"}}>Annuler</button>
                    </Form>

                    <p></p>
                </div>
        </div>
    )

}

