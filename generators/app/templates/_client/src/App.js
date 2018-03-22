import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
      {/* Put your routes here using the React Router */}
        {/* <Route exact path="/" component={Books} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
