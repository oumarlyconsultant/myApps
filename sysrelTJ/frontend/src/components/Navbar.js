import React from "react";

function Navbar(props){
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">syRel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-right">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">{props.menu1}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{props.menu2}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{props.menu3}</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

