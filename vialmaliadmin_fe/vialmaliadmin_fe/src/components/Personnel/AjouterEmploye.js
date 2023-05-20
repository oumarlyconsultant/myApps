import React from "react";

function AjouterEmploye(){
    return(
    <div class="w3-card-4">
    <div class="w3-container w3-brown">
        <h4>Remplissez le formulaire avec les informations du nouvel employe</h4>
    </div>
    <form class="w3-container" action="/action_page.php">
        <p>      
        <label class="w3-text-black"><b>Nom de famille</b></label>
        <input class="w3-input w3-border w3-sand" name="first" type="text"/></p>
        <p>      
        <label class="w3-text-black"><b>Prenom</b></label>
        <input class="w3-input w3-border w3-sand" name="last" type="text"/></p>
        <p>
        <label class="w3-text-black"><b>Date de naissance</b></label>
        <input class="w3-input w3-border w3-sand" name="last" type="text"/></p>
        <p>
        <label class="w3-text-black"><b>Sexe</b></label>
        <input class="w3-radio" type="radio" name="homme" value="homme"/>
        <label>Homme</label>
        <input class="w3-radio" type="radio" name="femme" value="femme"/>
        <label>Femme</label></p>
        <p>
        <label class="w3-text-black"><b>Adresse de domicile</b></label>
        <input class="w3-input w3-border w3-sand" name="last" type="text"/></p>
        <p>
        <label class="w3-text-black"><b>Numero de telephone principale</b></label>
        <input class="w3-input w3-border w3-sand" name="last" type="text"/></p>
        <p>
        <label class="w3-text-black"><b>Numero de telephone alternatif</b></label>
        <input class="w3-input w3-border w3-sand" name="last" type="text"/></p>
        <p>
        <label class="w3-text-black"><b>Email</b></label>
        <input class="w3-input w3-border w3-sand" name="last" type="text"/></p>
        <p>
        <button class="w3-btn w3-brown">Enregistrer</button>
        <button class="w3-btn w3-brown">Annuler</button>
        </p>
    </form>
    </div>
    )

}

export default AjouterEmploye;