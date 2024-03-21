import List1 from "../../components/List1";
import List2 from "../../components/List2";

function mission() {
  const componentsArray = [<List1 />, <List2 />];
  
  return (
    <main>
      <div>
        {componentsArray.map((item, id) => (
          <div key={id}>{item}</div>
        ))}
      </div>
    </main>
  );
}

export default mission;