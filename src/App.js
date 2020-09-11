import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>Home</div>
);

const About = () => (
  <div>About</div>
);

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div>
        {match ? '>' : ''}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><CustomLink to="/" label="Home" activeOnlyWhenExact>Home</CustomLink></li>
          <li><CustomLink to="/about" label="About">About</CustomLink></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
