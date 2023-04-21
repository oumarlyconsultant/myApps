import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

function Page(){
    return(
        <div>
            <Navbar module="Operations"/>
            <Content />
        </div>
    )
}

export default Page;