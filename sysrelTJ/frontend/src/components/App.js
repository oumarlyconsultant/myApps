import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

function App(){
    return(
        <div>
            <Navbar menu1="Acceuil" menu2="Espace proprietaire" menu3="Espace joueur" />
            <Content />
        </div>
    )
}

export default App;