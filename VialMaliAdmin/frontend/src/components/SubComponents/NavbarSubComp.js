import React from "react";
import Dropdown from "./Dropdown";



function NavbarSubComp(props){

    return(
        <div className="w3-bar w3-black w3-xlarge">
          <a href="#" className="w3-bar-item w3-button w3-right-align" style={{backgroundColor:"#aa0404"}}>{props.moduleName}</a>

          <Dropdown item={props.item1} subitem1={props.subitem1_1} subitem2={props.subitem1_2} subitem3={props.subitem1_3} onSelectOption={props.onSelectOption}
          />

          <Dropdown item={props.item2} subitem1={props.subitem2_1} subitem2={props.subitem2_2} subitem3={props.subitem2_3} onSelectOption={props.onSelectOption}
          />

          <Dropdown item={props.item3} subitem1={props.subitem3_1} subitem2={props.subitem3_2} subitem3={props.subitem3_3} onSelectOption={props.onSelectOption}
          />        

        </div>
    )
  }
  
  export default NavbarSubComp;