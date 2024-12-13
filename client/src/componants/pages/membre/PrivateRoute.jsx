import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("token"); // Vérifie si un token est stocké

    if (!token) {
        // Si l'utilisateur n'est pas authentifié, redirige vers /connexion
        return <Navigate to="/connexion" />;
    }

    // Si l'utilisateur est authentifié, affiche la route enfant
    return <Outlet />;
};

export default PrivateRoute;