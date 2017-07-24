import React, { Component } from "react";
import { connect } from "react-redux";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";


import * as actions from "../actions";


class App extends Component {
  componentWillMount() {
    this.state = {
      showLoader: {}
    };
    this.props.dispatch(actions.checkForTokenWithSync());
  }
  componentDidMount() {
    this.setState({ showLoader: { display: "none" } });
  }
  componentWillUnmount() {
    this.setState({ showLoader: { display: "" } });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          
          <Header />
         
            <div className="content">
              {this.props.children}
            </div>
        
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
