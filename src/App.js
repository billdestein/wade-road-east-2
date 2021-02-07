import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import HousePlans from './components/HousePlans';
import Land from './components/Land';
import Motivation from './components/Motivation';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          Wade Road East
        </div>
        <div className="App-middle">
          <div className="App-nav">
            <ul>
              <li>
                <Link className="App-link" to="/">Home </Link>
              </li>
              <li>
                <Link className="App-link" to="/housePlans">House Plans</Link>
              </li>
              <li>
                <Link className="App-link" to="/land">Land</Link>
              </li>
              <li>
                <Link className="App-link" to="/motivation">Motivation</Link>
              </li>
            </ul>
          </div>
          <div className="App-content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/housePlans">
                <HousePlans/>
              </Route>
              <Route path="/land">
                <Land/>
              </Route>
              <Route path="/motivation">
                <Motivation/>
              </Route>
            </Switch>
          </div>
        </div>        
      </div>
    </Router>
  );
}


