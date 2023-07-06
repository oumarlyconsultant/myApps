import { useState } from "react"
import { Form, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"

export default function NouvelEmployeLayout(){

    return(
        <div className="repertoire-employe-layout">
            <div class="w3-container">    
                
                {/* The section header */}
                <div className="repertoire-employes-header w3-panel w3-khaki w3-padding w3-round-large">
                <h2 class="w3-text-black w3-bold"><strong><i class="fa fa-user-plus" aria-hidden="true"/> Ajouter un nouvel employe</strong></h2>
                </div>

                <div class="the-content">
                    <Outlet />
                </div>
                   
            </div>
        </div>
    )

}