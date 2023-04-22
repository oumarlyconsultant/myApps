import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Card from '@mui/material/Card';

function App(){
    return(
        <div className="container">
            <Navbar menu1="Acceuil" menu2="Espace proprietaire" menu3="Espace joueur" />
            <hr/>
            <Content />
        </div>
    )
}

export default App;