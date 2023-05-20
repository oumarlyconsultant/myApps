import React, { useState } from "react";
import Content from "./Content";

function Navbar(promps){

    const [option,setOption] = useState("")

    let menu1 = ""
    let subMenu11 = ""
    let subMenu12 = ""
    let subMenu13 = ""

    let menu2 = ""
    let subMenu21 = ""
    let subMenu22 = ""
    let subMenu23 = ""

    let menu3 = ""
    let subMenu31 = ""
    let subMenu32 = ""
    let subMenu33 = ""

    let menu4 = ""
    let subMenu41 = ""
    let subMenu42 = ""
    let subMenu43 = ""

    if(promps.module==='Ventes') {

        menu1="Devis"
        subMenu11="Creer un devis"
        subMenu12="Devis existants"

        menu2="Factures"
        subMenu21="Creer une facture"
        subMenu22="Factures existantes"
        subMenu23="Effectuer un paiement"

        menu3="Clients"
        subMenu31="Ajouter un client"
        subMenu32="Clients existants"
        
    }

    if(promps.module==='Operations') {

        menu1="Articles et stock"
        subMenu11="Ajouter un article"
        subMenu12="Consulter le stock"

        menu2="Bons de commande"
        subMenu21="Creer un bon de commande"
        subMenu22="Bons de commande existants"

        menu3="Transactions sur le stock"
        subMenu31="Executer un bon de commande"
        subMenu32="Mis a jour du stock"

        menu4="Magasins"
        subMenu41="Ajouter un magasin"
        subMenu42="Consulter stock par magasin"
        
    }

    if(promps.module==='Personnel') {

        menu1="Employes"
        subMenu11="Ajouter un employe"
        subMenu12="Employes existants"

        menu2="Conges et absences"
        subMenu21="Noter un conge ou une absence"
        subMenu22="Conges et absences en cours"

        menu3="Salaires"
        subMenu31="Effectuer les salaires"
        subMenu32="Salaires precedents"
    }   

    function chooseOption(event){
        const e = event.target.name
        setOption(e)
    }

    if(promps.module === 'Acceuil') return(
        <div className="w3-row">
            <div className="w3-col md w3-blue w3-text-white w3-center w3-padding" style={{textShadow:"1px 1px 0 #444"}}><a name={promps.module}><h5>{promps.module}</h5></a></div>
        </div> 
    )
    else if(promps.module === 'Ventes') return(
        <div>
        <div className="w3-row">
            <div className="w3-col md w3-dark-grey w3-text-white w3-center w3-padding" style={{textShadow:"1px 1px 0 #444"}}><a name={promps.module}><h5>{promps.module}</h5></a></div>
        </div> 
    
        <div className="w3-bar">
            <div className="w3-row">
                <div className="w3-col s4 w3-black w3-border" >
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-black">{menu1}</button>
                    <div className="w3-dropdown-content w3-card-4">
                        <a href="#" className="w3-bar-item w3-button" name={subMenu11} onClick={chooseOption}>{subMenu11}</a>
                        <a href="#" className="w3-bar-item w3-button" name={subMenu12} onClick={chooseOption}>{subMenu12}</a>
                    </div>
                </div>
                </div>

                <div className="w3-col s4 w3-black w3-border" >
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-black">{menu2}</button>
                    <div className="w3-dropdown-content w3-card-4">
                        <a href="#" className="w3-bar-item w3-button" name={subMenu21} onClick={chooseOption}>{subMenu21}</a>
                        <a href="#" className="w3-bar-item w3-button" name={subMenu22} onClick={chooseOption}>{subMenu22}</a>
                        <a href="#" className="w3-bar-item w3-button" name={subMenu23} onClick={chooseOption}>{subMenu23}</a>
                    </div>
                </div>
                </div>

                <div className="w3-col s4 w3-black w3-border" >
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-black">{menu3}</button>
                    <div className="w3-dropdown-content w3-card-4">
                        <a href="#" className="w3-bar-item w3-button" name={subMenu31} onClick={chooseOption}>{subMenu31}</a>
                        <a href="#" className="w3-bar-item w3-button" name={subMenu32} onClick={chooseOption}>{subMenu32}</a>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <Content option={option}/>
    </div>   
    )
    else if(promps.module === 'Operations') return(
        <div>
            <div className="w3-row">
                <div className="w3-col md w3-dark-grey w3-text-white w3-center w3-padding" style={{textShadow:"1px 1px 0 #444"}}><a name={promps.module}><h5>{promps.module}</h5></a></div>
            </div> 
        
            <div className="w3-bar">
                <div className="w3-row">
                    <div className="w3-col s3 w3-black w3-border" >
                    <div className="w3-dropdown-hover">
                        <button className="w3-button w3-black">{menu1}</button>
                        <div className="w3-dropdown-content w3-card-4">
                            <a href="#" className="w3-bar-item w3-button" name={subMenu11} onClick={chooseOption}>{subMenu11}</a>
                            <a href="#" className="w3-bar-item w3-button" name={subMenu12} onClick={chooseOption}>{subMenu12}</a>
                        </div>
                    </div>
                    </div>

                    <div className="w3-col s3 w3-black w3-border" >
                    <div className="w3-dropdown-hover">
                        <button className="w3-button w3-black">{menu2}</button>
                        <div className="w3-dropdown-content w3-card-4">
                            <a href="#" className="w3-bar-item w3-button" name={subMenu21} onClick={chooseOption}>{subMenu21}</a>
                            <a href="#" className="w3-bar-item w3-button" name={subMenu22} onClick={chooseOption}>{subMenu22}</a>
                        </div>
                    </div>
                    </div>

                    <div className="w3-col s3 w3-black w3-border" >
                    <div className="w3-dropdown-hover">
                        <button className="w3-button w3-black">{menu3}</button>
                        <div className="w3-dropdown-content w3-card-4">
                            <a href="#" className="w3-bar-item w3-button" name={subMenu31} onClick={chooseOption}>{subMenu31}</a>
                            <a href="#" className="w3-bar-item w3-button" name={subMenu32} onClick={chooseOption}>{subMenu32}</a>
                        </div>
                    </div>
                    </div>

                    <div className="w3-col s3 w3-black w3-border" >
                    <div className="w3-dropdown-hover">
                        <button className="w3-button w3-black">{menu4}</button>
                        <div className="w3-dropdown-content w3-card-4">
                            <a href="#" className="w3-bar-item w3-button" name={subMenu41} onClick={chooseOption}>{subMenu41}</a>
                            <a href="#" className="w3-bar-item w3-button" name={subMenu42} onClick={chooseOption}>{subMenu42}</a>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

            <Content option={option}/>
        </div>    
    )
    else if(promps.module === 'Personnel') return(
        <div>
            <div className="w3-row">
                <div className="w3-col md w3-dark-grey w3-text-white w3-center w3-padding" style={{textShadow:"1px 1px 0 #444"}}><a name={promps.module}><h5>{promps.module}</h5></a></div>
            </div> 
        
            <div className="w3-bar">
                <div className="w3-row">
                    <div className="w3-col s4 w3-black w3-border" >
                    <div className="w3-dropdown-hover">
                        <button className="w3-button w3-black">{menu1}</button>
                        <div className="w3-dropdown-content w3-card-4">
                            <a href="#" className="w3-bar-item w3-button" name={subMenu11} onClick={chooseOption}>{subMenu11}</a>
                            <a href="#" className="w3-bar-item w3-button" name={subMenu12} onClick={chooseOption}>{subMenu12}</a>
                        </div>
                    </div>
                    </div>

                    <div className="w3-col s4 w3-black w3-border" >
                    <div className="w3-dropdown-hover">
                        <button className="w3-button w3-black">{menu2}</button>
                        <div className="w3-dropdown-content w3-card-4">
                            <a href="#" className="w3-bar-item w3-button" name={subMenu21} onClick={chooseOption}>{subMenu21}</a>
                            <a href="#" className="w3-bar-item w3-button" name={subMenu22} onClick={chooseOption}>{subMenu22}</a>
                        </div>
                    </div>
                    </div>

                    <div className="w3-col s4 w3-black w3-border" >
                    <div className="w3-dropdown-hover">
                        <button className="w3-button w3-black">{menu3}</button>
                        <div className="w3-dropdown-content w3-card-4">
                            <a href="#" className="w3-bar-item w3-button" name={subMenu31} onClick={chooseOption}>{subMenu31}</a>
                            <a href="#" className="w3-bar-item w3-button" name={subMenu32} onClick={chooseOption}>{subMenu32}</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <Content option={option}/>
        </div>   
    )
}

export default Navbar;