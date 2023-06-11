import React, {useState} from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";

//pages
import Acceuil from "./pages/Acceuil"
import Personnel from "./pages/Personnel"
import Employe from "./pages/personnel/Employe"
import RepertoireEmployes from "./pages/personnel/RepertoireEmployes"
import AjouterEmploye from "./pages/personnel/AjouterEmploye";

//layouts
import RootLayout from "./layouts/RootLayout"
import PersonnelLayout from "./layouts/PersonnelLayout"

//functions


//create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Acceuil />} />
      <Route path="personnel" element={<PersonnelLayout />}>
        <Route index element={<Personnel />} />
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

  const [color, changeColor] = useState("Azure");
  
  document.body.style.backgroundColor = color;

  return (
    <RouterProvider router={router} />
  );
}

export default App;
