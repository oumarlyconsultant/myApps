import React, {useState, useMemo} from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//pages
import Acceuil from "./pages/Acceuil"
import Personnel from "./pages/Personnel"
import ListeEtFicheEmployes from "./pages/personnel/repertoire/ListeEtFicheEmployes";
import FormNouvelEmploye from "./pages/personnel/nouvelEmploye/FormNouvelEmploye"
import FormTermesEmploi from "./pages/personnel/nouvelEmploye/FormTermesEmploi";
import FormEmployeExistant from "./pages/personnel/repertoire/FormEmployeExistant"
import FormTermesEmploiExistant from "./pages/personnel/repertoire/FormTermesEmploiExistant"

import EmployeDetails from "./components/EmployeDetails";
import EnregistrerAbsence from "./pages/personnel/EnregistrerAbsence";

//layouts
import RootLayout from "./layouts/RootLayout"
import PersonnelLayout from "./layouts/PersonnelLayout"
import RepertoireEmployesLayout from "./layouts/personnel/RepertoireEmployesLayout";
import NouvelEmployeLayout from "./layouts/personnel/NouvelEmployeLayout";

//functions
import { employesLoader } from "./functions/personnel/employesLoader";
import { employeFormActionPOST } from "./functions/personnel/employeFormActionPOST";
import { termesEmploiLoader } from "./functions/personnel/termesEmploiLoader"
import { employeExistantFormActionPOST } from "./functions/personnel/employeExistantFormActionPOST";



//create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Acceuil />} />
      <Route path="personnel" element={<PersonnelLayout />}>
          <Route index element={<Personnel />} />
          <Route path="repertoire" element={<RepertoireEmployesLayout />} action={employeExistantFormActionPOST} >
              <Route path="" element={<ListeEtFicheEmployes />} loader={employesLoader} />
              <Route path="details/:numeroEmploye" element={<EmployeDetails />} loader={employesLoader}/>
              <Route path="details/:numeroEmploye/modifier" element={<FormEmployeExistant />} loader={employesLoader}/>
              <Route path="details/:numeroEmploye/modifier/:id" element={<FormTermesEmploiExistant />} loader={termesEmploiLoader}/>
           </Route>

          <Route path="nouvel-employe" element={<NouvelEmployeLayout />} action={employeFormActionPOST}>
            <Route path="" element={<FormNouvelEmploye />} />
            <Route path="termes/:numeroEmploye" element={<FormTermesEmploi />} loader={employesLoader} />            
          </Route>
          <Route path="absence" element={<EnregistrerAbsence />} />
          

      </Route>
    </Route>
      )
)

function App() {

  const [color, changeColor] = useState("FloralWhite");
  
  document.body.style.backgroundColor = color;

  return (
    <RouterProvider router={router} />
  );
}

export default App;
