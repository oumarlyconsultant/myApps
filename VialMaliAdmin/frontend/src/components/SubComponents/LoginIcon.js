import React from "react";

function LoginIcon(props){
    return(
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={props.image} alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>{props.userFName}</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="">
        <li><a className="dropdown-item" href="#">Parametres</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Se deconnecter</a></li>
      </ul>
    </div>
    )    
}

export default LoginIcon;

