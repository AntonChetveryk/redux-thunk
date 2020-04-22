import React from "react";

import { Navigation } from "./Navigation/Navigation";

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <header>
          <Navigation />
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
