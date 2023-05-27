import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployesExistants_p2 from "./EmployesExistants_p2";

function EmployesExistants(){

    const [mode,setMode] = useState("")
    const [searchKey,setSearchKey] = useState("")

    function handleChange(event){
        let e = event.target.value
        setSearchKey(e)
    }

    return(
        <div>
            <section id="Options">
                <div className="w3-row">
                    <div className="search-container">
                        <form method="get">
                        <input type="text" placeholder="Rechercher par nom, prenom ou numero d'employe" name="searchKey" value={searchKey} onChange={handleChange} style={{width:"400px"}}/>
                        <button name="search" onClick={(event) => {event.preventDefault();setMode('search')}}><i className="fa fa-search"></i></button> &nbsp;
                        <button className="w3-button w3-khaki" name="all" onClick={(event) => {event.preventDefault();setMode('all')}}>Tous les employes</button>
                        </form>
                    </div>
                </div>
                
                <hr/>                
            </section>

            <section id="Results-Content">
                <EmployesExistants_p2 mode={mode} searchKey={searchKey}/>
            </section>

        </div>
    )

}

export default EmployesExistants;