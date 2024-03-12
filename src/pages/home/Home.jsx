import React from "react";
import Card from "../../components/card/Card";
// import {Cloudinary} from "@cloudinary/url-gen";


import "./home.scss";
function Home() {
  // const cld = new Cloudinary({cloud: {cloudName: 'dtvojwz5j'}});
  const homeIntro =
    "Bienvenue sur le site Ekklêsia Web. Nous accompagnons les Eglises locales dans leur croissance en permettant une plus grande visibilité sur Internet. A l’écoute des besoins spécifiques de chaque paroisse, nous proposons des sites Web clés en main, à prix serrés. Nous concevons également des solutions sur mesure et professionnelles, sécurisées et évolutives.";
  return (
    <main>
      <p className="intro">{homeIntro}</p>
      <Card />
    </main>
  );
}

export default Home;
