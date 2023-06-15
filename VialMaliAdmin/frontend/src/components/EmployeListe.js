import imgH from "../../static/media/photosEmployes/employe_homme_inc.png"

export default function EmployeListe(props){

    function handleClick(){
        // console.log(props.prenom)
        props.onClick(props.numeroEmploye)
    }

    return(
        <div className="theEmployeListe w3-card-4 w3-ripple" onClick={handleClick}>

        <div class="w3-bar">
            <div className="w3-bar-item">
                <span class="w3-xlarge">{props.prenom} {props.nom}</span> <br/>
                <span class="w3-large">{props.poste}, {props.departement}</span>
            </div>
        </div>
        
        </div>
    )
}