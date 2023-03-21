// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

import React, { useMemo } from "react";

function FilteredList({ objs }) {
  const array = useMemo(() => objs, [objs]);

  const print = array.map((el, id) => {
    if (el.eta > 18) {
      return (
        <li key={id}>
          <h1>Nome: {el.nome}</h1>
          <h3>Eta: {el.eta}</h3>
        </li>
      );
    }
  });

  return (
    <div>
      <ul>{print}</ul>
    </div>
  );
}

export default FilteredList;
