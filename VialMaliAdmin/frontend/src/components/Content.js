import React from "react";

import CreerDevis from "./Ventes/CreerDevis";
import DevisExistants from "./Ventes/DevisExistants";
import CreerFacture from "./Ventes/CreerFacture";
import FacturesExistants from "./Ventes/FacturesExistants";
import EffectuerPaiement from "./Ventes/EffectuerPaiement";
import AjouterClient from "./Ventes/AjouterClient";
import ClientsExistants from "./Ventes/ClientsExistants";

import AjouterArticle from "./Operations/AjouterArticle";
import ConsulterStockArt from "./Operations/ConsulterStockArt";
import CreerBon from "./Operations/CreerBon";
import BonsExistants from "./Operations/BonsExistants";
import ExecuterBon from "./Operations/ExecuterBon";
import MisAJourStock from "./Operations/MisAJourStock";
import AjouterMagasin from "./Operations/AjouterMagasin";
import ConsulterStockMag from "./Operations/ConsulterStockMag";

import AjouterEmploye from "./personnel/AjouterEmploye";
import EmployesExistants from "./personnel/EmployesExistants";


function Content(promps){
    if(promps.option !== '')
        return(
            <div className="w3-container w3-margin-top w3-padding">
                <div className="w3-panel w3-dark-grey">
                    <h2>{promps.option}</h2>
                </div>
                <hr/>
                {promps.option === 'Creer un devis' && <CreerDevis/>}
                {promps.option === 'Devis existants' && <DevisExistants/>}
                {promps.option === 'Creer une facture' && <CreerFacture/>}
                {promps.option === 'Factures existantes' && <FacturesExistants/>}
                {promps.option === 'Effectuer un paiement' && <EffectuerPaiement/>}
                {promps.option === 'Ajouter un client' && <AjouterClient/>}
                {promps.option === 'Clients existants' && <ClientsExistants/>}

                {promps.option === 'Ajouter un article' && <AjouterArticle/>}
                {promps.option === 'Consulter le stock' && <ConsulterStockArt/>}
                {promps.option === 'Creer un bon de commande' && <CreerBon/>}
                {promps.option === 'Bons de commande existants' && <BonsExistants/>}
                {promps.option === 'Executer un bon de commande' && <ExecuterBon/>}
                {promps.option === 'Mis a jour du stock' && <MisAJourStock/>}
                {promps.option === 'Ajouter un magasin' && <AjouterMagasin/>}
                {promps.option === 'Consulter stock par magasin' && <ConsulterStockMag/>}

                {/* {promps.option === 'Ajouter un employe' && <AjouterEmploye/>} */}
                {promps.option === 'Ajouter un employe' && <AjouterEmploye/>}
                {/* {promps.option === 'Employes existants' && <EmployesExistants/>} */}
                {promps.option === 'Employes existants' && <EmployesExistants/>}
            </div>
        )
}

export default Content;