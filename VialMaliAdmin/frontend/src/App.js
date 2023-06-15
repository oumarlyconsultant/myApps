import React, {useState} from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";

//pages
import Acceuil from "./pages/Acceuil"
import Personnel from "./pages/Personnel"
import TousLesEmployes from "./pages/Personnel/repertoire/TousLesEmployes"
import ResultatsRecherche from "./pages/Personnel/repertoire/ResultatsRecherche"
import EmployesInactifs from "./pages/Personnel/repertoire/EmployesInactifs"
import EmployeDetails from "./pages/personnel/repertoire/EmployeDetails";
import AjouterEmploye from "./pages/personnel/AjouterEmploye";
import EnregistrerAbsence from "./pages/personnel/EnregistrerAbsence";

//layouts
import RootLayout from "./layouts/RootLayout"
import PersonnelLayout from "./layouts/PersonnelLayout"
import RepertoireEmployesLayout from "./layouts/personnel/RepertoireEmployesLayout";
import TousLesEmployesLayout from "./layouts/personnel/repertoire/TousLesEmployesLayout";

//functions
import { employesLoader } from "./functions/personnel/employesLoader";


//create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Acceuil />} />
      <Route path="personnel" element={<PersonnelLayout />}>
        <Route index element={<Personnel />} />
        <Route path="repertoire" element={<RepertoireEmployesLayout />} >
          <Route path="actifs" element={<TousLesEmployesLayout />} loader={employesLoader}>
            <Route path=":numeroEmploye" element={<EmployeDetails />} />
          </Route>
          <Route path="resultats" element={<ResultatsRecherche />} />
          <Route path="inactifs" element={<EmployesInactifs />} />
          
        </Route>
        <Route path="ajouter" element={<AjouterEmploye />} />
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
