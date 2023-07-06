import React, { useEffect, useState } from "react";
import axios from "axios";

export default function getAPIData(entity,returnData,id){

    const endpoint = 'http://localhost:8000/api/'+entity+'/';
    const [objAll,setObjAll] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) =>{
            setObjAll(response.data);
        })
    },[])

    if(returnData=='all') return(objAll)
    else {
        if(id > 0){
            const thisObj= objAll.filter(s => (s.id == id))[0]
            return thisObj
            // if(thisObj.id > 0) return(console.log(thisObj))
            // else console.log("Error! this object is not in database")
        }
        else console.log("Error! please specify a valid id")
    }

}