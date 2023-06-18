import { NavLink } from "react-router-dom"
import imgH from "../../../static/media/photosEmployes/employe_homme_inc.png"

export default function EmployeListe(props){

    return(

        <div class="w3-bar w3-large">
            <NavLink to={props.numeroEmploye} className="w3-bar-item w3-ripple w3-light-gray" style={{textDecoration:"none", width:"800px"}}>
                <span class="w3-large">{props.prenom} {props.nom}</span> <br/>
                <span class="w3-medium">{props.poste}, {props.departement}</span>
            </NavLink>
        </div>
    )
}