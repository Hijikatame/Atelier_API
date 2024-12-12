// Importation des dépendances réact
import { Outlet } from "react-router-dom";

// Importation des fichiers CSS de base
import "./css/reset.css";
import "./css/pseudoClass.css";
import "./css/typo.css";

// Importation des composants
import Layout from "./componants/Layout";

function App() {

  return (
    <>
		<Layout>
            <Outlet />
        </Layout>
    </>
  )
}

export default App
