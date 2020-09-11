import React from 'react';
import { HashRouter as Router, Route, Link, Prompt, withRouter } from 'react-router-dom';

const Home = () => (
  <div>Home</div>
);

const About = () => (
  <div>About</div>
);

const MyPrompt = withRouter(({ location }) => {
  return (
    <Prompt
      when={location.pathname === '/about'}
      message={(dd) => {
        const bool = window.confirm('您确定要离开该页面吗?');
        return bool;
      }}
    />
  );
})

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      <MyPrompt />
    </Router>
  );
}

export default App;
