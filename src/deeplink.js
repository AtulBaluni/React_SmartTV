import React from "react"; 
import { Focusable, HorizontalList } from "./helper/react-navigation.js";

class deeplink extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Focusable
        onFocus={() => this.setState({ active: true })}
        onBlur={() => this.setState({ active: false })}
      >
        <div class={"item " + (this.state.active ? "item-focus" : "")} />
      </Focusable>
    );
  }
}
