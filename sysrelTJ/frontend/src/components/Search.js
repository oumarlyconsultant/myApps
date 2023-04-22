import React from "react";
import Jumbotron from "./Jumbotron";

function Search(){
    return(
        <div>
            <Jumbotron title="Des terrains de qualites, du fun absolue!"
            searchPlaceholder="Rechercher les terrains par nom, quartier ou proprietaire"
            buttonName="Rechercher"/>
        </div>
    )

}

export default Search;