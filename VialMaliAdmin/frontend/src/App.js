import React, {useState, useMemo} from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";

//pages
import Acceuil from "./pages/Acceuil"
import Personnel from "./pages/Personnel"
import ListeEtFicheEmployes from "./pages/personnel/repertoire/ListeEtFicheEmployes";
import NouvelEmploye, { NouvelEmployeAction } from "./pages/personnel/nouvelEmploye/NouvelEmploye"
import EmployeDetails from "./components/EmployeDetails";
import EnregistrerAbsence from "./pages/personnel/EnregistrerAbsence";

//layouts
import RootLayout from "./layouts/RootLayout"
import PersonnelLayout from "./layouts/PersonnelLayout"
import RepertoireEmployesLayout from "./layouts/personnel/RepertoireEmployesLayout";
import NouvelEmployeLayout from "./layouts/personnel/NouvelEmployeLayout";

//functions
import { employesLoader } from "./functions/employesLoader";
import { termesEmploiLoader } from "./functions/termesEmploiLoader";
import { employeFormActionPOST } from "./functions/employeFormActionPOST";
import { termesEmploiFormActionPOST } from "./functions/termeEmploiFormActionPOST";
import TermesEmploi from "./pages/personnel/nouvelEmploye/TermesEmploi";



//create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Acceuil />} />
      <Route path="personnel" element={<PersonnelLayout />}>
          <Route index element={<Personnel />} />
          <Route path="repertoire" element={<RepertoireEmployesLayout />}>
              <Route path="" element={<ListeEtFicheEmployes />} loader={employesLoader}>
                <Route path=":numeroEmploye" element={<EmployeDetails />} loader={employesLoader}/>
              </Route>            
          </Route>

          <Route path="nouvel-employe" element={<NouvelEmployeLayout />} action={employeFormActionPOST}>
            <Route path="" element={<NouvelEmploye />} />
            <Route path="termes/:numeroEmploye" element={<TermesEmploi />} loader={employesLoader} action={termesEmploiFormActionPOST}/>
            <Route path=":numeroEmploye" element={<EmployeDetails />} loader={employesLoader}/>
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
