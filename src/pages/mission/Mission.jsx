import List1 from "../../components/List1";
import List2 from "../../components/List2";
import "./mission.scss";
// import vue_sortie_temple from '../../utils/vue_sortie_temple.jpg'; // Import the image directly if needed

function Mission() {
  const componentsArray = [
    { id: 1, compo:      <img src={new URL('../../utils/vue_sortie_temple.jpg', import.meta.url).href} alt="sortie_temple" />,
  }, // Provide path as a string
    { id: 2, compo: <List1 /> },
    { id: 3, compo: <List2 /> }
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