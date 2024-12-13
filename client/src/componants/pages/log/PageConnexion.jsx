import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../modules/PageConnexionInscription.module.css";
import escapeHtml from "../../../const/escapeHtml.jsx";

export default function PageConnexion() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  // Réinitialiser les erreurs à chaque soumission

        // Valider les entrées
        const sanitizedEmail = escapeHtml(email);
        const sanitizedPassword = escapeHtml(password);

        // Vérification basique de l'email avec une expression régulière
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(sanitizedEmail)) {
            setError("Veuillez entrer un email valide.");
            return;
        }

        // Préparer les données
        const loginData = {
            email: sanitizedEmail,
            password: sanitizedPassword,
        };

        setIsSubmitting(true); // Désactiver le bouton lors de la soumission

        try {
            // Envoie les données à l'API
            const response = await fetch("http://localhost:5500/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
                mode: "cors"
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Connexion réussie :", data);

                // Vérifier si l'utilisateur est vérifié
                if (data.is_verified === 0) {
                    setError("Votre compte n'est pas vérifié. Veuillez vérifier votre e-mail.");
                    setIsSubmitting(false); // Réactiver le bouton
                    return;
                }

                // Stocker le token de session dans le stockage local
                localStorage.setItem("token", data.token);

                // Rediriger vers la page membre
                navigate("/membre");
            } else {
                // Si la réponse n'est pas OK, afficher l'erreur de l'API
                const errorData = await response.json();  // Récupérer l'erreur retournée par l'API
                setError(errorData.message || "Erreur inconnue");
                setIsSubmitting(false);  // Réactiver le bouton
            }
        } catch (error) {
            // Si une erreur se produit dans la requête
            console.error("Une erreur est survenue :", error);
            setError("Une erreur est survenue, veuillez réessayer.");
        } finally {
            setIsSubmitting(false); // Réactiver le bouton
        }
    };

    return (
        <>
            <section className={`flex flex-column flex-center height100 ${styles.heroBackground} ${styles.hero}`}>
                <h1 className={`color-white`}>Connexion</h1>
                <form onSubmit={handleSubmit} className={`flex flex-column gap-large`}>
                    {error && <p className={`color-ini`}>{error}</p>}
                    <div className={`flex flex-column`}>
                        <label htmlFor="email" className={`color-white`}>Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`input`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={`flex flex-column`}>
                        <label htmlFor="password" className={`color-white`}>Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            className={`input`}
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`color-white uppercase background-matisse button`}
                        disabled={isSubmitting}  // Désactiver le bouton pendant la soumission
                    >
                        {isSubmitting ? "Chargement..." : "Se connecter"}
                    </button>
                </form>
            </section>
        </>
    );
}
