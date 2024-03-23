import Component from "./Component";
import List1 from "./List1";
import List2 from "./List2";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { useEffect } from "react";
import React from "react";
import "./mission.scss";

function Mission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const componentsArray = [
    { id: 1, compo:      <img className="box-image-mission-diapo"  src={new URL('../../utils/vue_sortie_temple.jpg', import.meta.url).href} alt="sortie_temple" />,
  }, 
  { id: 2, compo: <Component /> },
  // Provide path as a string
      { id: 3, compo:      <img className="box-image-mission-diapo" src={new URL('../../utils/Diapositive5.webp', import.meta.url).href} alt="sortie_temple" />
  }, // Provide path as a string
    { id: 4, compo: <List1 /> },
    { id: 5, compo:      <img className="box-image-mission-diapo" src={new URL('../../utils/Diapositive6.webp', import.meta.url).href} alt="sortie_temple" />},
    { id: 6, compo: <Component2 /> },


    { id: 7, compo:      <img className="box-image-mission-diapo" src={new URL('../../utils/vue_vitrail_etage.jpg', import.meta.url).href} alt="sortie_temple" />},
    { id: 8, compo: <List2 /> },
    { id: 9, compo:      <img className="box-image-mission-diapo" src={new URL('../../utils/Diapositive7.webp', import.meta.url).href} alt="sortie_temple" />},
    { id: 10, compo: <Component3 /> },

  ];

  return (
    <main>
      <div className="box-card">
        {componentsArray.map((item) => (
          <div key={item.id}>{item.compo}</div> // Use item.id as the key and render item.compo
        ))}
      </div>
      <div className="flex-extend-container">
        <h2 className="title-extend">
          Un site internet pour votre Eglise, pour quoi faire ?
        </h2>
        <button onClick={handleOpen} className="button button-extend">
          En savoir +
        </button>
        {open ? (
          <div className="extend-content">
            <div className="box-image box-image-mission box-image-mission-diapo">
              <img
                alt="vitrail"
                className="diapo"
                src={new URL('../../utils/Diapositive5.webp', import.meta.url).href}
              />
            </div>
            <p>
              Un site internet de paroisse peut servir à plusieurs fins
              importantes, contribuant à renforcer la communauté et à faciliter
              la communication. Voici quelques-unes des utilisations
              potentielles d'un site Web pour une Eglise locale :
            </p>
            <ul className="box-info box-info-mission-sub">
              <li>
                <span className="bold-text">1. Information </span>
                Le site peut fournir des détails sur les horaires et lieux des
                cultes, des différents groupes (catéchèse, étude biblique,
                chorale, œcuménisme, etc.), des événements à venir (fêtes,
                concerts, etc.) et bien d’autres choses. Cela permet aux membres
                de la communauté et aux visiteurs de rester informés.
              </li>
              <li>
                <span className="bold-text">2. Communication </span> Un site Web
                peut servir de plateforme pour communiquer des annonces
                importantes (ex. : un service funèbre), des nouvelles de
                l'Eglise, des changements d'horaires, etc. Cela peut être
                particulièrement utile pour les membres qui ne peuvent pas
                assister régulièrement aux réunions ou pour les personnes
                nouvelles dans la communauté.
              </li>
              <li>
                <span className="bold-text">3. Ressources </span>Le site peut
                proposer des ressources spirituelles telles que des prédications
                enregistrées ou écrites, des éléments de liturgie (prières,
                confessions de foi, etc.), des études bibliques, des articles...
                Cela peut être utiles pour les membres qui souhaitent
                approfondir leur foi ou se ressourcer.
              </li>
              <li>
                <span className="bold-text"> 4. Contact </span> Donner des
                informations (contact, responsable de groupe, coordonnées) au
                visiteur, c’est faciliter la communication entre les membres de
                l'Eglise et l’extérieur. Les personnes peuvent dès lors poser
                des questions (culte, baptême, mariage, service funèbre) ou
                exprimer leur intérêt pour votre Eglise.
              </li>
              <li>
                <span className="bold-text"> 5. Évangélisation </span> Un site
                internet de paroisse est un outil formidable outil
                d'évangélisation dès lors qu’il fournit des informations sur la
                foi chrétienne, les conviction de l'Eglise, et invite les
                personnes à participer à la vie d’Eglise. Ne dit-il pas
                finalement comme Jésus à ses contemporains : « Venez et
                voyez » ? (Jn 1,39)
              </li>
              <li>
                <span className="bold-text"> 6. Collecte </span> Pour soutenir
                les activités de l'Eglise locale, le site peut inclure des
                fonctionnalités pour les dons en ligne. Cela permet à ceux qui
                le souhaitent de contribuer financièrement et de manière
                sécurisée… en quelques clics.
              </li>
              <li>
                <span className="bold-text">
                  7. Gestion du fichier paroissial
                </span>
                Un site Web peut également inclure des fonctionnalités
                sécurisées de gestion des membres, permettant aux responsables
                de l'Eglise (Conseil presbytéral, conseil paroissial, pasteur,
                prêtre…) de suivre les adhésions, de gérer les listes de
                diffusion, etc.
              </li>
              <li>
                <span className="bold-text"> 8. Éducation et formation</span> Le
                site peut être utilisé pour partager des informations éducatives
                sur la foi, des formations, des éléments de l'histoire de
                l'Eglise, des photos, des cartes, des vidéos, des musiques, etc.
              </li>
              <li>
                <span className="bold-text"> 9. Interaction </span> sociale Les
                fonctionnalités de médias sociaux sur le site peuvent faciliter
                l'interaction et le partage en ligne entre les membres de la
                communauté.
              </li>
              <li>
                <span className="bold-text">10. Diffuser</span> le culte Il y a
                une véritable demande pour la diffusion (style visio-conférence)
                du culte en direct, en replay (vidéo à la demande), en podcast
                (audio numérique). Pensez aux paroissiens qui ne peuvent plus se
                déplacer au temple ou à l’église. Si cela nécessite d’investir
                dans du matériel audio-visuel, la meilleure porte d’entrée est
                déjà d’avoir votre site d’Eglise.
              </li>
            </ul>

            <p>
              En résumé, un site internet pour une paroisse peut être un outil
              polyvalent qui soutient la communauté de diverses manières, allant
              de la communication à l'évangélisation en passant par la collecte
              de fonds et par la dynamisation de la vie d’Eglise.
            </p>
          </div>
        ) : null}
      </div>
      
    </main>
  );
}

export default Mission;