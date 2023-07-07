import React, { useEffect, useState } from "react";
import axios from "axios";

export default function getAPIData(entity){

    const endpoint = 'http://localhost:8000/api/'+entity+'/';
    const [objAll,setObjAll] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) =>{
            setObjAll(response.data);
        })
    },[])


    return(objAll)

}