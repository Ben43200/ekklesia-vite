import Component from "../../components/Component";
import List1 from "../../components/List1";
import List2 from "../../components/List2";
import Component2 from "./Component2";
import Component3 from "./Component3";
import "./mission.scss";
// import vue_sortie_temple from '../../utils/vue_sortie_temple.jpg'; // Import the image directly if needed

function Mission() {
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
    { id: 7, compo:      <img className="box-image-mission-diapo" src={new URL('../../utils/Diapositive7.webp', import.meta.url).href} alt="sortie_temple" />},
    { id: 6, compo: <Component3 /> },

  ];

  return (
    <main>
      <div className="box-card">
        {componentsArray.map((item) => (
          <div key={item.id}>{item.compo}</div> // Use item.id as the key and render item.compo
        ))}
      </div>
    </main>
  );
}

export default Mission;