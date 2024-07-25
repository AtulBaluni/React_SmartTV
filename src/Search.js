import React from "react";
import { Focusable } from "./helper/react-navigation.js";

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  onBlur() {
    this.setState({ active: false });
  }

  onFocus() {
    this.setState({ active: true });
  }

  render() {
    return (
      <Focusable onFocus={() => this.onFocus()} onBlur={() => this.onBlur()}>
        <div
          class={this.state.active ? "search-box-placeholder-focus" : ""}
          id="search-box-placeholder"
        >
          <i class="fa fa-search" />
          {this.props.text}
        </div>
      </Focusable>
    );
  }
}
