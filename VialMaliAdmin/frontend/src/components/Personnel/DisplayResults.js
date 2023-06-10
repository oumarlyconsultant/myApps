import ProfilEmploye from "./ProfilEmploye";
import React, {useNavigate} from "react-router-dom";

function DisplayResults(props){
    
    function handleClick(thisId){
        return(
        <ProfilEmploye id={thisId} />
        )
    }

    return(
            <tr>
                <td>
                <a onClick={() => handleClick(props.id)}>{props.prenom}</a>                    
                </td>
                <td>
                <a onClick={() => handleClick(props.id)}>{props.nom}</a>    
                </td>
                <td>
                    {props.poste}
                </td>
                <td>
                    {props.departement}
                </td>
            </tr>
    )
}

export default DisplayResults;