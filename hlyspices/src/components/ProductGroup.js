import Product from "./Product"
import img1 from "../img/epices_viande.jpg"

import { productData } from "../data/productData"

export default function ProductGroup(){
  const productList = productData
  return(
      <div className="container mt-4 p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.4)'}}>
      <div className="text-center text-white"><h1>Nos produits</h1></div>
      <div className="row">
        {productList.map(p => (
          <div className="col p-4 ms-3"><Product key={p.id} productName={p.productName} productDesc={p.productDesc} productImg={img1}/></div>
          )
          )
        }
      </div>
    </div>
  )
}