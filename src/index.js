import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar.js";
import List from "./List.js";
import Search from "./Search.js";
import SplashScreen from "./SplashScreen"; // Import the SplashScreen component
import Navigation, {
  VerticalList,
  HorizontalList,
} from "./helper/react-navigation.js";
import MyProvider, { MyContext } from "./global.js";
import { data, data_1 } from "./data.js";
class ReactTVApp extends React.Component {
  static contextType = MyProvider;
  constructor() {
    super();
    this.state = {
      lists: data,
      showSplash: true,
      //showSplash: MyProvider.showSplash, // State to control the splash screen visibility
    };
    this._contextType = MyProvider;
  }

  changeFocusTo(index) {
    this.setState({ active: index });
  }

  onBlurLists() {
    // this.setState({ active: null });
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(MyContext);
      this.setState({
        showSplash: false, // Hide the splash screen after 1 second
      });
    }, 1000);

    // setTimeout(() => {
    //   this.setState({
    //     lists: this.state.lists.concat(data_1),
    //   });
    // }, 2000);
  }

  render() {
    const { lists, showSplash } = this.state;

    // const context= useContext(MyProvider);

    // Render the splash screen if showSplash is true
    if (showSplash) {
      return <SplashScreen />;
    }
    localStorage.setItem("activeNav","home-div-nav");
    return (
      <>
        <Navigation id="home-div-nav" active={true} >
          <div className="active-component">
            <HorizontalList>
              <div>
                <Sidebar /> 

                
                <div class="mainbox">
                  <VerticalList retainLastFocus={true}>
                    <Search retainLastFocus={true} />
                    <VerticalList
                      id="content"
                      onBlur={() => this.onBlurLists()}
                      retainLastFocus={true}
                      navDefault
                    >
                      {lists.map((list, i) => (
                        <List
                          title={list.title}
                          layout={list.layout}
                          assets={list.assets}
                          onFocus={() => this.changeFocusTo(i)}
                          visible={
                            this.state.active !== null
                              ? i >= this.state.active
                              : true
                          }
                          parentNav="home-div-nav"
                        />
                      ))}
                    </VerticalList>
                  </VerticalList>
                </div>
              </div>
            </HorizontalList>
          </div>
        </Navigation>

        <div id="main-div"></div>
        <div id="playerDiv"></div>
      </>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <ReactTVApp />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
