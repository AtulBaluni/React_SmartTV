// MainContent.js
import React from "react";
import Sidebar from "./Sidebar.js";
import Search from "./Search.js";
import { VerticalList } from "./helper/react-navigation.js";
import ListContainer from "./ListContainer";

const MainContent = ({ lists }) => {
  return (
    <div className="mainbox">
      <VerticalList retainLastFocus={true}>
        <Sidebar />
        <Search retainLastFocus={true} />
        <ListContainer lists={lists} />
      </VerticalList>
    </div>
  );
};

export default MainContent;
