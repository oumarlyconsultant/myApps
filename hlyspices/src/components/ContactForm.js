import { useState } from "react"

export default function ContactForm(){
    const [formData,setFormData] = useState({})

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setFormData(prevValues => ({...prevValues,[name]:value}))
    }

    return(
        <div className="container mt-4 mb-5 p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.4)',color:"white"}}>
        <div className="row">
            <div className="col">
                <h1>Ecrivez-nous</h1>
                <form action={"mailto:"+formData.email} method="post" encType="text/plain">
                    <div class="mb-3">
                        <label class="form-label">Prenom et nom</label>
                        <input type="text" class="form-control" name="nom" value={formData.nom || ""} onChange = {handleChange} required="True" />
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Numero de telephone</label>
                    <input type="text" class="form-control" name="telephone" value={formData.telephone || ""} onChange = {handleChange} required="True"  />
                    </div>            

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" value={formData.email || ""} onChange = {handleChange} aria-describedby="emailHelp" required="True" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Votre message</label>
                        <textarea class="form-control" name="message" value={formData.message || ""} onChange = {handleChange} required="True" />
                    </div>
                    <button type="submit" class="btn btn-danger">Soumettre</button>
                </form>
            </div>
            <div className="col ps-5">
                <h1>Information de contact</h1>
                <p>HLY Spices</p>
                <p><i class="fa-solid fa-house"></i> Faladje I.J.A, Bamako, Mali</p>
                <p><i class="fa-brands fa-whatsapp" style={{color: '#24e50b'}}/> +223 66 77 88 99</p>       
                <p><i class="fa-solid fa-at"></i> hlyspices@gmail.com</p>         
            </div>

        </div>

        </div>
    )
}