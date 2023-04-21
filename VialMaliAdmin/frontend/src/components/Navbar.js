import React from "react";
import objectsNavbar from "./objectsNavbar";

const moduleButtonStyle = {
  backgroundColor:"#3399ff",
  float:"right"
}

function Navbar(props){
  const thisModule = objectsNavbar.find(obj => {
      return obj.name === props.module
    })

  return(
          <div id="navbar" className="w3-xxlarge" >
            <ul>
              
              {thisModule.subitems.map(subitem => <li><a href={subitem[0]}>{subitem[1]}</a></li>)}
              <li style={moduleButtonStyle}><a href="#">{thisModule.name}</a></li> 
                      
            </ul>

              
          </div>
  )
}

export default Navbar;