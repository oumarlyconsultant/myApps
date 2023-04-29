import React from "react"
import NavbarAcceuil from "./Acceuil/NavbarAcceuil"
import NavbarVentes from "./Ventes/NavbarVentes"
import NavbarOperations from "./Operations/NavbarOperations"
import NavbarPersonnel from "./Personnel/NavbarPersonnel"

function Navbar(props){

  if(props.moduleName==='Acceuil') return(<NavbarAcceuil />)
  else if(props.moduleName==='Ventes') return(<NavbarVentes />)
  else if(props.moduleName==='Operations') return(<NavbarOperations />)
  else if(props.moduleName==='Personnel') return(<NavbarPersonnel />)    

}

export default Navbar;