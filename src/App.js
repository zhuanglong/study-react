import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </ul>
      </div>
    </Router>
  );
}

export default App;
