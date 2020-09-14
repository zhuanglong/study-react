import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => (
  <div>Home</div>
);

const About = () => (
  <div>About</div>
);

const NoMatch = () => (
  <div>404</div>
);

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/setting">Setting</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
