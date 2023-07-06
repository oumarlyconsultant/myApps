import { useEffect, useState, useMemo } from "react"
import { Link, NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom"
// import Table from "../../components/ReactTable"

export default function RepertoireEmployesLayout(){

    return(
        <div className="repertoire-employes-layout">
            <div class="w3-container">    
                       
                {/* The section header */}
                <div className="the-header w3-panel w3-khaki w3-padding w3-round-large">
                    <h2 class="w3-text-black w3-bold"><strong><i class="fa fa-book" aria-hidden="true"/> Repertoire des employes</strong></h2>
                </div>

                {/* The content header */}            
                <div class="the-content">
                    <Outlet />
                </div>
                
            </div>
        </div>
    )

}