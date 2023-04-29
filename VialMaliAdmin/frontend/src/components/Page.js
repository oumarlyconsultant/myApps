import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

function Page(props){
    return(
        <div className="pageOL">
            <Navbar moduleName={props.moduleName}/>
            <Content moduleName={props.moduleName}/>
        </div>
    )
}

export default Page;