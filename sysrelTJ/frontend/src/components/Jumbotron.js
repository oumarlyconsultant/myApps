import React from "react";

function Jumbotron(props){
    return(
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>{props.title}</h2>
          <p>{props.paragraph}</p>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder={props.searchPlaceholder} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">{props.buttonName}</button>
            </div>
          </div>
        </div>
    )
}

export default Jumbotron;