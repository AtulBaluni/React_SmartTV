import React from "react";
import { Focusable, HorizontalList } from "./helper/react-navigation.js";
import PLayerComponent from "./playerComponent";
import ReactDOM from "react-dom";
import DetailComponent from "./details";
import { data2 } from "./data.js";
import MainContent from "./home.js";
class ToogleItem extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
    this.assetClick = this.assetClick.bind(this);
  }

  assetClick() {
    var cc = localStorage.getItem("activeNav");
    if (cc != this.props.parentNav) {
      return;
    }

    // Handle click event
    console.log("Asset clicked:", this.props.assetinfo);
    this.setState({ active: true });
    this.fo;
    if (this.props.onClick) {
      this.props.onClick(this.props.assetinfo);
    }
    if (this.props.assetinfo.type == "VOD") {
      ReactDOM.render(
        <PLayerComponent source={this.props.assetinfo.url} />,
        document.querySelector("#playerDiv")
      );
    } else {
      // console.log("nav", this.context.navigationComponent.props.children.props);
      // var aa = document.getElementsByClassName("active-component");
      //var qq= aa[0].classList.remove("active-component");

      ReactDOM.render(<DetailComponent />, document.querySelector("#main-div"));
    }
  }

  onKeyDown = (event) => {
    this.assetClick();
  };
  // React Functions
  componentDidMount() {
    // window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    // window.removeEventListener('keyup', this.onKeyUp);
  }
  render() {
    return (
      <Focusable
        onFocus={() => this.setState({ active: true })}
        onBlur={() => this.setState({ active: false })}
        // onEnterDown={(event)=>this.onKeydown(event)}
        onEnterDown={() => this.onKeyDown()}
        onClick={this.assetClick}
      >
        <div className={"item " + (this.state.active ? "item-focus" : "")}>
          <img
            src={this.props.assetinfo.image}
            alt={this.props.assetinfo.title}
          />
        </div>
      </Focusable>
    );
  }
}

export default class List extends React.Component {
  constructor() {
    super();
    this._lastFocus = null;
  }

  componentDidMount() {
    const width =
      Math.floor(this.content.scrollWidth / this.content.clientWidth) *
        this.content.clientWidth +
      this.content.clientWidth +
      20;
    if (this.content.getElementsByClassName("hz-list")[0]) {
      this.content.getElementsByClassName("hz-list")[0].style.width =
        width + "px";
    }
  }

  onFocus(index) {
    console.log(index, this._lastFocus);
    if (this._lastFocus === index) {
      return;
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (this.content) {
      const items = this.content.getElementsByClassName("item");
      const rect = items[index] && items[index].getBoundingClientRect();
      const isVisible =
        rect &&
        rect.top >= 0 &&
        rect.left >= 114 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);
      if (rect && !isVisible) {
        if (rect.left < 0) {
          items[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else if (rect.left >= 0) {
          items[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }

    this._lastFocus = index;
  }

  render() {
    return (
      <div
        class={
          "contentgroup " +
          this.props.layout +
          " " +
          (this.props.visible ? "" : "fading-out")
        }
      >
        <h1>{this.props.title}</h1>
        <div
          class="content"
          ref={(content) => {
            this.content = content;
          }}
        >
          <HorizontalList
            class="hz-list"
            style={{ overflow: "hidden", display: "block" }}
            onFocus={(index) => this.onFocus(index)}
            onBlur={() => {
              this._lastFocus = null;
            }}
            retainLastFocus={true}
          >
            {this.props.assets.map((asset, i) => (
              <ToogleItem assetinfo={asset} parentNav={this.props.parentNav} />
            ))}
          </HorizontalList>
        </div>
      </div>
    );
  }
}
