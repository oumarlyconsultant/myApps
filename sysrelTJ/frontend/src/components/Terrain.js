import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Terrain(props){
    return(
        // <div>
        //     <p>{props.photo1}</p>
        //     <h1>{props.nom}</h1>
        //     <p><strong>Adresse: </strong>{props.adresse}</p>
        //     <p><strong>Quarier: </strong>{props.quartier}</p>
        //     <p><strong>Min minutes de jeu: </strong>{props.nombreUnitesMin}</p>
        //     <p><strong>Max minutes de jeu: </strong>{props.nombreUnitesMax}</p>
        //     <p><strong>Type: </strong>{props.type}</p>
        // </div>
        <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
            <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
            </MDBRipple>
            <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )

}

export default Terrain;