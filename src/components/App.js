import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Users from "./Users/Users";
import AddUsers from "./AddUsers/AddUsers";

const App = () => (
  <Router>
    <Switch>
      <Layout>
        <Route exact path="/" component={Users} />
        <Route exact path="/add-users" component={AddUsers} />
      </Layout>
    </Switch>
  </Router>
);

export default App;
