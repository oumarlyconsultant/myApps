import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout(){

    // function w3_open() {
    //     document.getElementById("content").style.marginLeft = "15%";
    //     document.getElementById("hamburgercontent").style.width = "15%";
    //     document.getElementById("hamburgercontent").style.display = "block";
    //     document.getElementById("hamburgerbutton").style.display = 'none';
    // }
    // function w3_close() {
    // document.getElementById("content").style.marginLeft = "0%";
    // document.getElementById("hamburgercontent").style.display = "none";
    // document.getElementById("hamburgerbutton").style.display = "inline-block";
    // }

    const [theSidebarStyle, setTheSidebarStyle] = useState({
        display: "none"
    })

    const [theContentStyle, setTheContentStyle] = useState({
        marginLeft: "0%"
    })

    const [theNavButtonStyle,setTheNavButtonStyle] = useState({
        display: "inline-block",
        position: "relative"
    })

    function openHamburger(){
        setTheSidebarStyle({
            display: "block",
            width: "15%"
        }
        )
        setTheContentStyle({
            marginLeft: "15%"
        })
        setTheNavButtonStyle({
            display: "none"
        })
    }

    function closeHamburger(){
        setTheSidebarStyle({
            display: "none"
        }
        )
        setTheContentStyle({
            marginLeft: "0%"
        })
        setTheNavButtonStyle({
            display: "inline-block"
        })
    }

    return(
        <div className="root-layout">
            <div className="w3-sidebar w3-bar-block w3-border-right" style={theSidebarStyle} id="theSidebar">
                    <button onClick={closeHamburger} className="w3-bar-item w3-large">Fermer &times;</button>
                    <a href="/" className="w3-bar-item w3-button">Acceuil</a>
                    <a href="#" className="w3-bar-item w3-button">Ventes</a>
                    <a href="#" className="w3-bar-item w3-button">Operations</a>
                    <a href="personnel" className="w3-bar-item w3-button">Personnel</a>
            </div>

            <div className="theContent" style={theContentStyle}>
                <button id="theNavButton" style={theNavButtonStyle} className="w3-button w3-orange w3-xlarge" onClick={openHamburger}>&#9776; Modules</button>
                <Outlet />
            </div>
        </div>
    )
}

            // <a href="/" className="w3-bar-item w3-button" name="Acceuil" onClick={chooseModule}>Acceuil</a>
            // <a href="/ventes" className="w3-bar-item w3-button" name="Ventes" onClick={chooseModule}>Ventes</a>
            // <a href="/operations" className="w3-bar-item w3-button" name="Operations" onClick={chooseModule}>Operations</a>
            // <a href="/personnel" className="w3-bar-item w3-button" name="Personnel" onClick={chooseModule}>Personnel</a>