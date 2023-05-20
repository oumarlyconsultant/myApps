import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

function Page(props){

    const [selectedOption,setSelectedOption] = useState(props.module)

    function selectOption(O){
        setSelectedOption(O)
        console.log(selectedOption)
        // setCheck(1)
        // setContent(whichClicked)
        // console.log(whichClicked)
        // if(props.moduleName==='Ventes') {
        //     if (e==='Ventes') return(<Ventes />)
        //     if (e==='Devis') return(<Devis />)
        //     if (e==='Creer_devis') return(<Creer_devis />)
        //     if (e==='Devis_prec') return(<Devis_prec />)
        //     if (e==='Factures') return(<Factures />)
        //     if (e==='Generer_factures') return(<Generer_factures />)
        //     if (e==='Factures_prec') return(<Factures_prec />)
        //     if (e==='Clients') return(<Clients />)
        //     if (e==='Nouveau_client') return(<Nouveau_client />)
        //     if (e==='Clients_existants') return(<Clients_existants />)
        // }
    }

    return(
        <div className="pageOL">
            <Navbar module={props.module} onSelectOption={selectOption} />
            <Content option={selectedOption}/>
        </div>
    )
}

export default Page;