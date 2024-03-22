import React from 'react';
import { dataMission } from "../utils/dataMission";

// function List2() {
//   return (
//     <div>
//       {dataMission.map((item, id) => {
//         const TagName = item.tag; // Dynamically assign the tag based on the data
//         const className= item.className
//         const DynamicComponent = React.createElement(TagName, { key: id }, item.content);
//         return <React.Fragment key={id} className={className}>{DynamicComponent}</React.Fragment>;
//       })}
//     </div>
//   );
// }

// export default List2;



function List2() {
  return (
    <>
      {dataMission.map((item, id) => {
        const TagName = item.tag;
        const className = item.className;
        return (
          <TagName key={id} className={className}>
            {item.content}
          </TagName>
        );
      })}
    </>
  );
}

export default List2;