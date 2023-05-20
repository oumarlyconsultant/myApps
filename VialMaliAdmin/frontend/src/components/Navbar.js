import React from "react"
import NavbarSubComp from "./SubComponents/NavbarSubComp"

function Navbar(props){

  function showNavbar(M){
    if(M==='Acceuil') {
      return(
      <div className="w3-bar w3-blue">
       <h1>Bienvenue dans l'application <strong>Vial-Mali Admin</strong></h1>
      </div>
    )
      }
    else if(M==='Ventes') {
      let item1 = "Devis"
      let subitem1_1 = "Creer_devis"
      let subitem1_2 = "Devis_actives"
      let subitem1_3 = "Historique_devis"
  
      let item2 = "Factures"
      let subitem2_1 = "Generer_factures"
      let subitem2_2 = "Factures_actives"
      let subitem2_3 = "Historique_factures"
  
      let item3 = "Clients"
      let subitem3_1 = "Nouveau_client"
      let subitem3_2 = "Clients_existants"
      let subitem3_3 = "Rapport_client"
      return(
        <NavbarSubComp

        onSelectOption={props.onSelectOption}
        
        item1={item1}
        subitem1_1={subitem1_1}
        subitem1_2={subitem1_2}
        subitem1_3={subitem1_3}

        item2={item2}
        subitem2_1={subitem2_1}
        subitem2_2={subitem2_2}
        subitem2_3={subitem2_3}

        item3={item3}
        subitem3_1={subitem3_1}
        subitem3_2={subitem3_2}
        subitem3_3={subitem3_3}
        />
    )
      }
    else if(M==='Operations') {
      let item1 = "Stock"
      let subitem1_1 = "Consulter_stock"
      let subitem1_2 = "Mis_a_jour_stock"
      let subitem1_3 = "Historique_transactions"
  
      let item2 = "Bons_de_commande"
      let subitem2_1 = "Nouveau_bon"
      let subitem2_2 = "Bons_actives"
      let subitem2_3 = "Historique_bons"
  
      let item3 = "Articles_et_produits"
      let subitem3_1 = "Articles_bruts"
      let subitem3_2 = "Articles_fabriques"
      let subitem3_3 = "Nouvel_article"
      return(
        <NavbarSubComp

        onSelectOption={props.onSelectOption}
        
        item1={item1}
        subitem1_1={subitem1_1}
        subitem1_2={subitem1_2}
        subitem1_3={subitem1_3}

        item2={item2}
        subitem2_1={subitem2_1}
        subitem2_2={subitem2_2}
        subitem2_3={subitem2_3}

        item3={item3}
        subitem3_1={subitem3_1}
        subitem3_2={subitem3_2}
        subitem3_3={subitem3_3}
        />
    )
      }
    else if(M==='Personnel') {
      let item1 = "Employes"
      let subitem1_1 = "Nouvel_employe"
      let subitem1_2 = "Employe_existant"
      let subitem1_3 = "Historique_transactions"
  
      let item2 = "Absences_et_conges"
      let subitem2_1 = "Nouvel_absence"
      let subitem2_2 = "Modifier_requete_abscence"
      let subitem2_3 = "Historique_absences"
  
      let item3 = "Salaires"
      let subitem3_1 = "Effectuer_salaire"
      let subitem3_2 = "Changer_structure_salarial"
      let subitem3_3 = "Historique_salaires"
      return(
        <NavbarSubComp

        onSelectOption={props.onSelectOption}
        
        item1={item1}
        subitem1_1={subitem1_1}
        subitem1_2={subitem1_2}
        subitem1_3={subitem1_3}

        item2={item2}
        subitem2_1={subitem2_1}
        subitem2_2={subitem2_2}
        subitem2_3={subitem2_3}

        item3={item3}
        subitem3_1={subitem3_1}
        subitem3_2={subitem3_2}
        subitem3_3={subitem3_3}
        />
    )
      }
  }

  return(
    showNavbar(props.module)
  )

  

}

export default Navbar;