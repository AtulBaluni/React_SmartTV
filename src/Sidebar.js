import React from "react";
import { Focusable, VerticalList } from "./helper/react-navigation.js";

class ToogleItem extends React.Component {
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
        <div class={"item " + (this.state.active ? "item-focus" : "")}>
          <i class={"fa fa-" + this.props.icon} /> {this.props.children}
        </div>
      </Focusable>
    );
  }
}

export default class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  setActive(status, index) {
    this.setState({ active: status });
    if (status) {
      if (this.content1) {
        const items = this.content1.getElementsByClassName("item");
        const rect = items[index] && items[index].getBoundingClientRect();
        const isVisible =
          rect &&
          rect.top >= 980 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= 139;
        if (rect && !isVisible) {
          items[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }
  }
  render() {
    return (
      <div id="sidebar" class={this.state.active ? "focused" : ""}>
        {/* <div id="icons">
          <div>
            <span class="fa fa-home" />
          </div>
          <div>
            <span class="fa fa-star" />
          </div>
          <div>
            <span class="fa fa-music" />
          </div>
          <div>
            <span class="fa fa-ellipsis-v" />
          </div>
        </div> */}
        <div
          id="menu"
          ref={(content) => {
            this.content1 = content;
          }}
        >
          <VerticalList
            onFocus={(index) => this.setActive(true, index)}
            onBlur={() => this.setActive(false)}
            retainLastFocus={true}
          >
            <ToogleItem icon="user">Login</ToogleItem>
            <ToogleItem icon="search">Search</ToogleItem>
            <ToogleItem icon="home">Home</ToogleItem>
            <ToogleItem icon="star">Star</ToogleItem>
            <ToogleItem icon="music">Music</ToogleItem>
            <ToogleItem icon="film">Film</ToogleItem>
            {/* <ToogleItem icon="home">Home</ToogleItem>
            <ToogleItem icon="star">Star</ToogleItem>
            <ToogleItem icon="music">Music</ToogleItem>
            <ToogleItem icon="film">Film</ToogleItem>
            <ToogleItem icon="music">Music</ToogleItem>
            <ToogleItem icon="film">Film</ToogleItem>
            <ToogleItem icon="home">Home</ToogleItem>
            <ToogleItem icon="star">Star</ToogleItem>
            <ToogleItem icon="music">Music</ToogleItem>
            <ToogleItem icon="film">Film</ToogleItem> */}
          </VerticalList>
        </div>
      </div>
    );
  }
}
