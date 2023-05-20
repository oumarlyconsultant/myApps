import React, { useState } from "react";
import Content from "./Content";

function Navbar(promps){

    const [option,setOption] = useState("")

    let menu1 = ""
    let subMenu11 = ""
    let subMenu12 = ""
    let subMenu13 = ""

    let menu2 = ""
    let subMenu21 = ""
    let subMenu22 = ""
    let subMenu23 = ""

    let menu3 = ""
    let subMenu31 = ""
    let subMenu32 = ""
    let subMenu33 = ""

    let menu4 = ""
    let subMenu41 = ""
    let subMenu42 = ""
    let subMenu43 = ""

    if(promps.module==='Ventes') {

        menu1="Devis"
        subMenu11="Creer un devis"
        subMenu12="Devis existants"

        menu2="Factures"
        subMenu21="Creer une facture"
        subMenu22="Factures existantes"
        subMenu23="Effectuer un paiement"

        menu3="Clients"
        subMenu31="Ajouter un client"
        subMenu32="Clients existants"
        
    }

    if(promps.module==='Operations') {

        menu1="Articles et stock"
        subMenu11="Ajouter un article"
        subMenu12="Consulter le stock"

        menu2="Bons de commande"
        subMenu21="Creer un bon de commande"
        subMenu22="Bons de commande existants"

        menu3="Transactions sur le stock"
        subMenu31="Executer un bon de commande"
        subMenu32="Mis a jour du stock"

        menu4="Magasins"
        subMenu41="Ajouter un magasin"
        subMenu42="Consulter stock par magasin"
        
    }

    if(promps.module==='Personnel') {

        menu1="Employes"
        subMenu11="Ajouter un employe"
        subMenu12="Employes existants"

        menu2="Conges et absences"

        menu3="Salaires"
        
    }   

    function chooseOption(event){
        const e = event.target.name
        setOption(e)
    }

    return(
        <div>
            <div class="w3-row">
                <div class="w3-col md w3-blue-grey w3-text-amber w3-center w3-padding" style={{textShadow:"1px 1px 0 #444"}}><a name={promps.module}><h5>{promps.module}</h5></a></div>

                <div class="w3-col s3 w3-black w3-center w3-button"><a name={menu1} onClick={chooseOption}>{menu1}</a></div>
                <div class="w3-col s3 w3-black w3-center w3-button"><a name={menu2} onClick={chooseOption}>{menu2}</a></div>
                <div class="w3-col s3 w3-black w3-center w3-button"><a name={menu3} onClick={chooseOption}>{menu3}</a></div>
                <div class="w3-col s3 w3-black w3-center w3-button"><a name={menu4} onClick={chooseOption}>{menu4}</a></div>    
            </div>   
            <Content option={option}/>
        </div>   
    )
}

export default Navbar;