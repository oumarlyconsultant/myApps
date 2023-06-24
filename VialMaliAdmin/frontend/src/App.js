import React, {useState} from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";

//pages
import Acceuil from "./pages/Acceuil"
import Personnel from "./pages/Personnel"
import EmployeDetails from "./components/personnel/EmployeDetails";
import EnregistrerAbsence from "./pages/personnel/EnregistrerAbsence";

//layouts
import RootLayout from "./layouts/RootLayout"
import PersonnelLayout from "./layouts/PersonnelLayout"
import RepertoireEmployesLayout from "./layouts/personnel/RepertoireEmployesLayout";
import TousLesEmployesLayout from "./layouts/personnel/repertoire/TousLesEmployesLayout";
import RechercheEmployeLayout from "./layouts/personnel/repertoire/RechercheEmployeLayout";
import NouvelEmployeLayout from "./layouts/personnel/NouvelEmployeLayout";

//functions
import { employesLoader } from "./functions/personnel/employesLoader";




//create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Acceuil />} />
      <Route path="personnel" element={<PersonnelLayout />}>
        <Route index element={<Personnel />} />
        <Route path="repertoire" element={<RepertoireEmployesLayout />} loader={employesLoader}>
          <Route path="actifs" element={<TousLesEmployesLayout />} loader={employesLoader}>
            <Route path=":numeroEmploye" element={<EmployeDetails />} loader={employesLoader}/>
          </Route>
          <Route path="recherche/:searchKey" element={<RechercheEmployeLayout />} loader={employesLoader}>
            <Route path=":numeroEmploye" element={<EmployeDetails />} loader={employesLoader}/>
          </Route>
          
        </Route>
        <Route path="ajouter" element={<NouvelEmployeLayout />}>
          <Route path=":numeroEmploye" element={<EmployeDetails />} loader={employesLoader}/>
        </Route>
        <Route path="absence" element={<EnregistrerAbsence />} />

      </Route>
      {/* <Route path="ventes"/>
      <Route path="operations" />
      // <Route path="personnel" element={<PersonnelLayout />}>
      //   <Route index element={<Personnel />} />
        <Route path="employes" element={<EmployesLayout />}>
          <Route index element={<Employe />} />
          <Route path="repertoire" element={<RepertoireEmployes />} />
          <Route path="ajouter" element={<AjouterEmploye />} />
        </Route>
        <Route path="absences" />
        <Route path="salaires" />     
      </Route> */}
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
