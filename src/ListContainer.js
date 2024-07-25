// ListContainer.js
import React, { useState } from "react";
import { VerticalList } from "./helper/react-navigation.js";
import List from "./List.js";

const ListContainer = ({ lists }) => {
  const [active, setActive] = useState(null);

  const changeFocusTo = (index) => {
    setActive(index);
  };

  const onBlurLists = () => {
    // Optionally handle blur logic
  };

  return (
    <VerticalList
      id="content"
      onBlur={() => onBlurLists()}
      retainLastFocus={true}
      navDefault
    >
      {lists.map((list, i) => (
        <List
          key={i}
          title={list.title}
          layout={list.layout}
          assets={list.assets}
          onFocus={() => changeFocusTo(i)}
          visible={active !== null ? i >= active : true}
        />
      ))}
    </VerticalList>
  );
};

export default ListContainer;
