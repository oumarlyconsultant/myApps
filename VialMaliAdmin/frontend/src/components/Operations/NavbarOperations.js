import React from "react";
import NavbarSubComp from "../SubComponents/NavbarSubComp";

function NavbarOperations(props){  

    let moduleName='Operations'

    let item1 = "Stock"
    let subitem1_1 = "Consulter stock"
    let subitem1_2 = "Mettre a jour stock"
    let subitem1_3 = ""

    let item2 = "Bons de commande"
    let subitem2_1 = "Creer bon de commande"
    let subitem2_2 = "Bons de commande prec."
    let subitem2_3 = ""

    let item3 = "Articles et produits"
    let subitem3_1 = "Articles finis et bruts"
    let subitem3_2 = "Produits fabriques"
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
  
  export default NavbarOperations;


