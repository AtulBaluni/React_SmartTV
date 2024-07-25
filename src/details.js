import React, { useEffect, useState } from "react";
import Navigation, { HorizontalList } from "./helper/react-navigation.js";
import { data_1 } from "./data.js";
import { VerticalList } from "./helper/react-navigation.js";
import List from "./List.js";

const DetailComponent = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    console.log("Test");
    document.getElementById("main-div").style.display = "block";
    setTimeout(function () {
      localStorage.setItem("activeNav", "main-div-nav");
    }, 1000);
  });

  const changeFocusTo = (index) => {
    setActive(index);
  };

  const onBlurLists = () => {
    // Optionally handle blur logic
  };
  const handlekeydown = (e) => {
    if (e.key === "Backspace") {
      document.getElementById("main-div").style.display = "none";
      localStorage.setItem("activeNav", "home-div-nav");
      window.removeEventListener("keydown", handlekeydown);
    }
  };
  window.addEventListener("keydown", handlekeydown);
  return (
    <div className="main-wrapper" id="main-id">
      <Navigation id="main-div-nav" active={true}>
        <HorizontalList>
          <VerticalList
            id="content"
            onBlur={() => onBlurLists()}
            retainLastFocus={true}
          >
            {data_1.map((list, i) => (
              <List
                key={i}
                title={list.title}
                layout={list.layout}
                assets={list.assets}
                onFocus={() => changeFocusTo(i)}
                visible={active !== null ? i >= active : true}
                parentNav="main-div-nav"
              />
            ))}
          </VerticalList>
        </HorizontalList>
      </Navigation>
    </div>
  );
};

export default DetailComponent;
