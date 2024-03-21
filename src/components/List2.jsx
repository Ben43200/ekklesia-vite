import React from 'react';
import { dataMission } from "../utils/dataMission";

function List2() {
  return (
    <div>
      {dataMission.map((item, id) => {
        const TagName = item.tag; // Dynamically assign the tag based on the data
        const DynamicComponent = React.createElement(TagName, { key: id }, item.content);
        return <React.Fragment key={id}>{DynamicComponent}</React.Fragment>;
      })}
    </div>
  );
}

export default List2;