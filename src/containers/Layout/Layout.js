import React, { Component } from "react";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import Feed from "../Feed/Feed";

class Layout extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavigationItems />
        <Feed />
      </div>
    );
  }
}

export default Layout;
