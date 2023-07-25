export default function Product(props){
    return(
        <div class="card" style={{width: '20rem'}}>
        <img src={props.productImg} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{props.productName}</h5>
            <p class="card-text">{props.productDesc}</p>
            {/* <a href="#" class="btn btn-warning">Ajouter au panier</a> */}
        </div>
        </div>
    )
}