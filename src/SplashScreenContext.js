// SplashScreenContext.js
import React, { createContext, Component } from 'react';

// Create the context
const SplashScreenContext = createContext();

// Create a provider component
class SplashScreenProvider extends Component {
  state = {
    showSplash: true,
  };

  hideSplashScreen = () => {
    this.setState({ showSplash: false });
  };
 
  render() { 
    return (
        
      <SplashScreenContext.Provider
        value={{ showSplash: this.state.showSplash,  hideSplashScreen: this.hideSplashScreen }} >
        {this.props.children}
      </SplashScreenContext.Provider>
    )
  }
}

export { SplashScreenContext, SplashScreenProvider };
