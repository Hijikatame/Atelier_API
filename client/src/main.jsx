import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Importation des dépendance react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Importation des composants
import App from './App.jsx';
import Home from "./componants/pages/accueil/Home";
import PagePersonnage from "./componants/pages/fichePersonnage/PagePersonnage";
import APropos from "./componants/pages/aPropos/APropos.jsx";
import PageUnivers from "./componants/pages/univers/PageUnivers.jsx";
import PageRegles from "./componants/pages/regles/PageRegle.jsx";
import PageBestiaire from "./componants/pages/bestiaire/PageBestiaire.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/builder",
        element: <PagePersonnage />,
      },
      {
        path: "/about",
        element: <APropos />,
      },
      {
        path: "/univers",
        element: <PageUnivers />,
      },
      {
        path: "/rules",
        element: <PageRegles />,
      },
      {
        path: "/bestiaire",
        element: <PageBestiaire />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
