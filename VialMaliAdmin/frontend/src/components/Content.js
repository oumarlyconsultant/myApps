import React, { useState } from "react";


function Content(props){

  function showContent(O){
    if(O==='Acceuil') {
      return(
        <div>
          {O}
        </div>
      )

    } 
    else if(O==='Ventes') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Devis') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Creer_devis') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Devis_actives') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Historique_devis') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Factures') {
      return(
        <div>
          {O}
        </div>
      )
      
    }
    else if(O==='Generer_factures') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Factures_actives') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Historique_factures') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Clients') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Nouveau_client') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Clients_existants') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Rapport_client') {
      return(
        <div>
          {O}
        </div>
      )
      
    }

    else if(O==='Operations') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Stock') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Consulter_stock') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Mis_a_jour_stock') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Historique_transactions') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Bons_de_commande') {
      return(
        <div>
          {O}
        </div>
      )
      
    }
    else if(O==='Nouveau_bon') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Bons_actives') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Historique_bons') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Articles_et_produits') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Articles_bruts') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Articles_fabriques') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Nouvel_article') {
      return(
        <div>
          {O}
        </div>
      )
      
    }

    else if(O==='Personnel') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Employes') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Nouvel_employe') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Employe_existant') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Historique_transactions') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Absences_et_conges') {
      return(
        <div>
          {O}
        </div>
      )
      
    }
    else if(O==='Nouvel_absence') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Modifier_requete_abscence') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Historique_absences') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Salaires') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Effectuer_salaire') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Changer_structure_salarial') {
      return(
        <div>
          {O}
        </div>
      )
      
    } 
    else if(O==='Historique_salaires') {
      return(
        <div>
          {O}
        </div>
      )
      
    }
  }

  showContent(props.option)

}

export default Content;