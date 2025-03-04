import React from "react"; 
import './Accueil.css';
import './apropos.css';
import './menu.css';
import './commentaires.css';
// import Comments from "../../components/Comments/Comments";
import dessert1 from "../../components/images/dessert1.png";
import salades from "../../components/images/salades.png" ;
import foiegras from "../../components/images/foiegras.png" ;
import oeufarcis from "../../components/images/oeufarcis.png" ;
import entreechaud from "../../components/images/entreechaud.png" ;
import djnkoume from "../../components/images/djnkoume.png" ;
import dessert2 from "../../components/images/dessert2.png" ;



const Accueil = () => {
    
    return (

        

        <div>


            <section class="banniere" id="banniere">

                {/* <ul className={`navbar ${isOpen ? "open" : ""}`}>
                    <li>
                        <a href="/" onClick={toggleNav}>
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#apropos" onClick={toggleNav}>
                            À propos
                        </a>
                    </li>
                    <li>
                        <a href="#menu" onClick={toggleNav}>
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#commentaires" onClick={toggleNav}>
                            Commentaires
                        </a>
                    </li>
                    <li>
                        <a href="/Contacts" onClick={toggleNav}>
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="/Reserves" onClick={toggleNav} className="btn-reserve">
                            Réservation
                        </a>
                    </li>
                </ul> */}

                <div class="contenu">
                    <h2>
                        Avec les meilleurs plats
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum expedita minus eius corrupti
                        quibusdam consectetur facere, iusto unde. Aliquid cum accusamus suscipit id! Ducimus illum sint rem odit
                        nesciunt!
                    </p>
                    <div className="button">
                        <a href="#menu" class="btn1">
                            Menu
                        </a>
                        <a href="/reservation" class="btn2">
                            Reservation
                        </a>
                    </div>
                </div>
            </section>

            <section className="apropos" id="apropos">

                <h2 className="titre-texte">
                    <span>A</span> Propos De Nous
                </h2>

                <div className="row">

                    <div className="col-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque natus debitis tenetur
                            aliquam vero pariatur similique fugiat dolores corporis, illum optio. Beatae, nemo. Soluta ea iusto
                            nostrum quis quisquam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque natus debitis tenetur
                            aliquam vero pariatur similique fugiat dolores corporis, illum optio. Beatae, nemo. Soluta ea iusto
                            nostrum quis quisquam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque natus debitis tenetur
                            aliquam vero pariatur similique fugiat dolores corporis, illum optio. Beatae, nemo. Soluta ea iusto
                            nostrum quis quisquam.
                        </p>
                    </div>

                    <div className="col-6">
                        <div className="img">
                            <img src={dessert1} alt="dessert1"/>
                        </div>
                    </div>
                </div>

            </section>

            <section className="menu" id="menu">

                <div className="contenu">

                    <div className="titre">

                        <h2 className="titre-texte">
                            Notre <span>M</span>enu
                        </h2>

                        <p>
                            Sit illum esse totam, cum, inventore minima perspiciatis, delectus error reprehenderit possimus
                            quasi beatae!

                        </p>

                    </div>

                </div>

                <div className="contenu">

                    <div className="box">

                        <div className="imbox">
                            <img src= {salades} alt="Salades avocat oeuf mollet" id="i1"/>
                        </div>

                        <div className="text">
                            <h3>
                                S. Avocat oeuf mollet
                            </h3>
                        </div>

                    </div>

                    <div className="box">

                        <div className="imbox">
                            <img src= {foiegras} alt="Foie Gras" id="i2"/>
                        </div>

                        <div className="text">
                            <h3>
                                Foie Gras
                            </h3>
                        </div>

                    </div>

                    <div className="box">

                        <div className="imbox">
                            <img src= {dessert1} alt="Riz jaune au boeuf"/>
                        </div>

                        <div className="text">
                            <h3>
                                Riz jaune au boeuf
                            </h3>
                        </div>

                    </div>

                    <div className="box">

                        <div className="imbox">
                            <img src= {dessert1} alt="Millefeuilles de Gavotte sauce caramel"/>
                        </div>

                        <div className="text">
                            <h3>
                                Millefeuilles au crml
                            </h3>
                        </div>

                    </div>

                    <div className="box">

                        <div className="imbox">
                            <img src={oeufarcis} alt="Oeuf dur farcis au Saumon fumé"/>
                        </div>

                        <div className="text">
                            <h3>
                                Oeufarcis au Saumon
                            </h3>
                        </div>

                    </div>

                    <div className="box">

                        <div className="imbox">
                            <img src={entreechaud} alt="Coquilles Saint-Jacques"/>
                        </div>

                        <div className="text">
                            <h3>
                                Cqlles Saint-Jacques
                            </h3>
                        </div>

                    </div>

                    <div className="box">

                        <div className="imbox">
                            <img src={djnkoume} alt="Djinkoume blanc"/>
                        </div>

                        <div className="text">
                            <h3>
                                Djinkoume au Poulet
                            </h3>
                        </div>

                    </div>

                    <div className="box">

                        <div className="imbox">
                            <img src={dessert2} alt="Verrine de fraise au speculoos"/>
                        </div>

                        <div className="text">
                            <h3>
                                Verrine au speculoos
                            </h3>
                        </div>

                    </div>
                </div>

                <div className="titre">
                    <a href="/Menu" className="btn1">
                        Voir Plus
                    </a>
                </div>

            </section>

            <section className="commentaires" id="commentaires">
            <div className="contenu">
                <div className="titre blanc">
                    <h2 className="titre-texte">
                        Ce que disent nos <span>C</span>lients
                    </h2>
                    <p>
                        Nos clients partagent leur expérience avec nous.
                    </p>
                </div>
            </div>

            <div className="contenu">
                
                <div className="box">
                    <article className="imbox">
                        <img src="/images/pers1.png" alt="Client 1" />
                    </article>
                    <div className="text">
                        <p>
                            “Service exceptionnel, plats délicieux et ambiance chaleureuse !”
                            <details>
                                <summary>Voir Plus</summary>
                                Je recommande vivement ce restaurant, un vrai délice !
                            </details>
                        </p>
                    </div>
                </div>

                
                <div className="box">
                    <article className="imbox">
                        <img src="/images/pers2.png" alt="Client 2" />
                    </article>
                    <div className="text">
                        <p>
                            “Un cadre agréable et un personnel très attentionné.”
                            <details>
                                <summary>Voir Plus</summary>
                                Les plats sont bien présentés et savoureux. J'y retournerai !
                            </details>
                        </p>
                    </div>
                </div>

                {/* Ajoute plus de commentaires ici si besoin */}
            </div>
        </section>

            <section className="contacts">

                <div className="contenu">

                    <div className="titre noir">

                        <h2 className="titre-texte">
                            Pour nous <span>C</span>ontacter
                        </h2>

                        <p>
                            Sit illum esse totam, cum, inventore minima perspiciatis, delectus error reprehenderit possimus
                            quasi beatae!
                        </p>

                    </div>



                </div>

            </section>

            <div className="Copyright">
                <p>
                    Copyright 2024 <a href="/Accueil">Katy Ekoue</a> tous droits reservés
                </p>
            </div>


        </div>

    );
};

export default Accueil;
