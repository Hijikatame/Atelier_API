// Importation des styles module CSS
import styles from "../../../modules/Home.module.css";
import logo from "../../../../public/images/icones/Etername.svg";
import homeUnivers from '../../../../public/images/mobile/homeUnivers.jpg';
import homeBestiaire from '../../../../public/images/mobile/homeBestiaire.jpg';

// Importation des dépendances réact
import React from "react";

// Importation de Link
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <section className={`flex flex-column height100 ${styles.homeBackground} ${styles.hero}`}>
                <h1 className={`${styles.h1} flex flex-center`}><img className={`${styles.h1Img}`} src={logo} alt="Logo Etern'Âme" /></h1>
                <p className={`${styles.h1Text} color-white cinzel`}>Héroïque Fantaisie Revisité</p>
                <div className={`${styles.divBackground} width100`}>
                </div>
            </section>
            <section className={`background-brown padding-section`}>
                <h2 className={`color-white flex flex-column`}><span>Découvrez</span> <span className="color-matisse">EternÂme ?</span></h2>
                <p className="color-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad similique placeat! Minus vel dolor nostrum nulla commodi eius fuga quasi cumque. Optio quo rem sapiente error unde dignissimos quae.</p>
                <div className={`redirection`}>
                <a className="flex flex-center flex-space-between color-white" href="https://discord.gg/Tjk2gXQBbk" target="_blank"><h3>Rejoinez notre communauté</h3><span>➤</span></a>
                </div>
                <div>
                <a className="flex flex-center flex-space-between color-white" href="" target="_blank"><h3>Téléchargez gratuitement</h3><span>➤</span></a>
                </div>
                <div className={`redirection`}>
                <Link to="/about" className="flex flex-center flex-space-between color-white"><h3>En savoir plus</h3><span>➤</span></Link>
                </div>
            </section>
            <section className={`background-brown padding-section`}>
            <h2 className={`color-white flex flex-column`}><span>Le continent</span> <span className="color-matisse">d'Eirendel</span></h2>
                <p className="color-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusantium minima quis illo! Ratione totam laborum praesentium ab tempore nostrum, illum natus doloribus temporibus autem qui voluptas ad reprehenderit molestiae!</p>
                <img className={`${styles.img} width100`} src={homeUnivers} alt="Une ville Jagger dans la montagne" />
                <article>
                    <h3 className={`color-white flex flex-center gap-medium`}><span>10</span><div className={`${styles.h3Ligne} flex-grow`}></div><span>Espèces</span></h3>
                    <p className="color-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio modi, nesciunt exercitationem facere provident id ad laudantium dolor. Perferendis, pariatur fugit! Ipsum fugit adipisci odio sapiente, magni voluptates dolore.</p>
                    <div className={`redirection`}>
                        <Link to="/univers" className="flex flex-center flex-space-between color-white"><h3>Explorez notre univers</h3><span>➤</span></Link>
                    </div>
                </article>
            </section>
            <section className={`background-brown padding-section`}>
            <h2 className={`color-white flex flex-column`}><span>Un héro</span> <span className="color-matisse">à votre image</span></h2>
                <p className="color-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusantium minima quis illo! Ratione totam laborum praesentium ab tempore nostrum, illum natus doloribus temporibus autem qui voluptas ad reprehenderit molestiae!</p>
                <article>
                    <h3 className={`color-white flex flex-center gap-medium`}><span>Système</span><div className={`${styles.h3Ligne} flex-grow`}></div><span>D6</span></h3>
                    <p className="color-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio modi, nesciunt exercitationem facere provident id ad laudantium dolor. Perferendis, pariatur fugit! Ipsum fugit adipisci odio sapiente, magni voluptates dolore.</p>
                    <div className={`redirection`}>
                        <Link to="/builder" className="flex flex-center flex-space-between color-white"><h3>Créez votre héros</h3><span>➤</span></Link>
                    </div>
                    <div className={`redirection`}>
                        <Link to="/rules" className="flex flex-center flex-space-between color-white"><h3>Parcourez nos règles</h3><span>➤</span></Link>
                    </div>
                </article>
            </section>
            <section className={`background-brown padding-section`}>
            <h2 className={`color-white flex flex-column`}><span>Les créatures</span> <span className="color-matisse">de la nuit</span></h2>
                <p className="color-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusantium minima quis illo! Ratione totam laborum praesentium ab tempore nostrum, illum natus doloribus temporibus autem qui voluptas ad reprehenderit molestiae!</p>
                <img className={`${styles.img2} width100`} src={homeBestiaire} alt="Une personne devant un créature qui se fragmente en miliers de corbeaux" />
                <div className={`redirection`}>
                    <Link to="/bestiaire" className="flex flex-center flex-space-between color-white"><h3>Découvrez l'Encyclopéd'êtres</h3><span>➤</span></Link>
                </div>
            </section>
        </>
    );
}