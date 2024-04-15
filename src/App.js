// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// version 6.0.0 > Routes
import NavBar from './NavBar';
import Home from './Home';
// import About from './About';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
