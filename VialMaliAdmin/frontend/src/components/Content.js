import React from "react"
import Acceuil from "./Acceuil/Acceuil"
import Ventes from "./Ventes/Ventes"
import Operations from "./Operations/Operations"
import Personnel from "./Personnel/Personnel"

function Content(props){

  if(props.moduleName==='Acceuil') return(<Acceuil />)
  else if(props.moduleName==='Ventes') return(<Ventes />)
  else if(props.moduleName==='Operations') return(<Operations />)
  else if(props.moduleName==='Personnel') return(<Personnel />)    

}

export default Content;