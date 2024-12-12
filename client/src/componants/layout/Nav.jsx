import React, { useState, useEffect } from "react";
// Importartion des styles module CSS
import styles from "../../modules/Nav.module.css";
import logo from "../../../public/images/icones/Etername.svg";
import favicon from "../../../public/images/icones/Etername-logo.svg";

// Importation de Link et uselocation
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const [inputValue, setInputValue] = useState(""); // État pour stocker la valeur de l'input
    const [isOpen, setIsOpen] = useState(false); // État pour le menu
    const location = useLocation(); // Récupère l'URL actuelle

    const handleSearch = (e) => {
        e.preventDefault();
        setInputValue(e.target.value); // Mettre à jour la valeur de l'input
    };

    const handleClear = () => {
        setInputValue(""); // Réinitialiser l'input quand la croix est cliquée
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Basculer l'état du menu
    };

    // Réinitialise isOpen à false à chaque changement de route
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]); // Exécute l'effet lorsque le chemin change

    return (
        <header className={`${styles.header} flex flex-space-between relative`}>
            <div
                className={`${styles.containerBurger} flex flex-column flex-center gap-small relative ${isOpen ? styles.open : ""}`}
                onClick={toggleMenu}
            >
                {/* Changement en fonction de l'état "isOpen" */}
                {isOpen ? (
                    <>
                        <span className={`background-white absolute ${styles.cross1}`}></span>
                        <span className={`background-white absolute ${styles.cross2}`}></span>
                    </>
                ) : (
                    <>
                        <span className="background-white"></span>
                        <span className="background-white"></span>
                        <span className="background-white"></span>
                        <div className={`${styles.imageOverlay} absolute`}>
                            <img src={favicon} alt="Logo Etern'Âme" />
                        </div>
                    </>
                )}
            </div>
            <Link 
                to="/" 
                className={`${styles.logo} flex flex-center ${location.pathname === "/" ? styles.displayNone : ""}`}
            >
                <img src={logo} alt="Logo Etern'Âme" />
            </Link>
            <div className={`${styles.containerNav} ${isOpen ? styles.showNav : ""} absolute width100 background-brown`}>
                <div className={`${styles.containerSearch} flex`}>
                    <input 
                        type="text" 
                        placeholder="Feature à venir" 
                        value={inputValue} 
                        onChange={handleSearch} 
                        className={`${styles.inputField}`}
                    />
                    <button onClick={inputValue ? handleClear : null} className={`${styles.button} color-white flex flex-center`}>
                        {inputValue ? "✖" : "➡"}
                    </button>
                </div>
                <nav className={`${styles.nav} flex flex-column gap-medium relative`}>
                    <Link
                        className={`${styles.link} relative color-white ${location.pathname === "/" ? styles.active : ""}`}
                        to="/"
                    >
                        Accueil
                    </Link>
                    <Link
                        className={`${styles.link} relative color-white ${location.pathname === "/about" ? styles.active : ""}`}
                        to="/about"
                    >
                        A Propos
                    </Link>
                    <Link
                        className={`${styles.link} relative color-white ${location.pathname === "/about" ? styles.active : ""}`}
                        to="/univers"
                    >
                        Univers
                    </Link>
                    <Link
                        className={`${styles.link} relative color-white ${location.pathname === "/builder" ? styles.active : ""}`}
                        to="/builder"
                    >
                        Création de personnage
                    </Link>
                    <Link
                        className={`${styles.link} relative color-white ${location.pathname === "/rules" ? styles.active : ""}`}
                        to="/rules"
                    >
                        Règles
                    </Link>
                    <Link
                        className={`${styles.link} relative color-white ${location.pathname === "/bestiaire" ? styles.active : ""}`}
                        to="/bestiaire"
                    >
                        Encyclopéd'êtres
                    </Link>
                </nav>
            </div>
        </header>
    );
}