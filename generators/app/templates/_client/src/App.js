import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import DocumentTitle from "react-document-title";
import {Col,Row,Grid} from "react-bootstrap";


const App = () => (
  <DocumentTitle title="My Mern App">
  <Grid>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
      </Grid>
  </DocumentTitle>
);

export default App;