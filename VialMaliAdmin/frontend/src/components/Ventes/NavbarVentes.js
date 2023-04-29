import React from "react";
import NavbarSubComp from "../SubComponents/NavbarSubComp";

function NavbarVentes(props){  

    let moduleName='Ventes'

    let item1 = "Devis"
    let subitem1_1 = "Creer devis"
    let subitem1_2 = "Devis prec."
    let subitem1_3 = ""

    let item2 = "Factures"
    let subitem2_1 = "Generer facture"
    let subitem2_2 = "Facture prec."
    let subitem2_3 = ""

    let item3 = "Clients"
    let subitem3_1 = "Nouveau client"
    let subitem3_2 = "Clients existants"
    let subitem3_3 = ""

    return(
        <NavbarSubComp
        moduleName = {moduleName}
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
  
  export default NavbarVentes;