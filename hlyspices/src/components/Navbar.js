import img_logo from "../img/logo.png"
import { Link } from "react-scroll"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
          <img className="p-2" src={img_logo} style={{width:"10rem",borderRadius:"50%"}} />
            {/* <a className="navbar-brand" href="#">HLY Spices</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="product-group"
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    offset={-10}
                    duration={1000}> <a className="nav-link btn btn-lg btn-outline-danger" href="#">Nos produits</a> </Link>
                    &nbsp;

                <Link to="contact-form"
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    offset={-10}
                    duration={500}> <a className="nav-link btn btn-lg btn-outline-danger" href="#">Contact</a> </Link>
                
                <p className="display-5 ms-5" style={{fontFamily:"Trangerine,cursive",opacity:"0.5"}}><em>La passion du gout!</em></p>
              </div>
            </div>
          </div>
        </nav>
    )
}