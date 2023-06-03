import React, { useEffect, useState } from "react";
import axios from "axios";

function RetrieveAPIData(props){

    const endpoint = 'http://localhost:8000/api/'+props.entity+'/';
    const [objAll,setObjAll] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) =>{
            setObjAll(response.data);
        })
    },[])

    if(props.data=='all') return(console.log(objAll))
    else {
        if(props.id > 0){
            const thisObj= objAll.filter(s => (s.id == props.id))[0]
            console.log(thisObj)
            // if(thisObj.id > 0) return(console.log(thisObj))
            // else console.log("Error! this object is not in database")
        }
        else console.log("Error! please specify the primary key")
    }
}

export default RetrieveAPIData;