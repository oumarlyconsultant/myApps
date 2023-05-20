import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Page from "./Page";

function App(){

  const [selectedModule,setSelectedModule] = useState()

  function selectModule(module){
    // setSelectedModule(module)
    // console.log(selectedModule)
  }

  return(
    <div>
      <Sidebar onSelectModule={selectModule} /> 
      <Page module={selectedModule} />
    </div>
    
  )
}

export default App;
