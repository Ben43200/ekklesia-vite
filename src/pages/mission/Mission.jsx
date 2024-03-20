import { dataMission } from "../../utils/dataMission";




 function  Mission ()  {
    return (
        <main>
      <div>
        {dataMission.map((item) => {
          const TagName = item.tag; // Dynamically assign the tag based on the data
  
          return <TagName key={item.id}>{item.content}</TagName>;
        })}
      </div>
      </main>
    );
  };
  export default Mission