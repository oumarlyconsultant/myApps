import React from "react";
import Ventes from "../Ventes/Ventes";
import Devis from "../Ventes/Devis";
import Creer_devis from "../Ventes/Creer_devis";
import Devis_prec from "../Ventes/Devis_prec";
import Factures from "../Ventes/Factures";
import Generer_factures from "../Ventes/Generer_factures";
import Factures_prec from "../Ventes/Factures_prec";
import Clients from "../Ventes/Clients";
import Nouveau_client from "../Ventes/Nouveau_client";
import Clients_existants from "../Ventes/Clients_existants";

function handleClickNavItem(pageToLoad){
    if(pageToLoad==='Ventes') return(<Ventes />)
    if(pageToLoad==='Devis') return(<Devis />)
    if(pageToLoad==='Ventes') return(<Ventes />)
    if(pageToLoad==='Creer_devis') return(<Creer_devis />)
    if(pageToLoad==='Devis_prec') return(<Devis_prec />)
    if(pageToLoad==='Factures') return(<Factures />)
    if(pageToLoad==='Generer_factures') return(<Generer_factures />)
    if(pageToLoad==='Factures_prec') return(<Factures_prec />)
    if(pageToLoad==='Clients') return(<Clients />)
    if(pageToLoad==='Nouveau_client') return(<Nouveau_client />)
    if(pageToLoad==='Clients_existants') return(<Clients_existants />)
    console.log(pageToLoad)
}

export {handleClickNavItem}