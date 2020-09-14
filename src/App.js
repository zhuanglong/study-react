import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: () => <div>Home</div>,
  },
  {
    title: 'About',
    path: '/about',
    component: () => <div>About</div>,
  },
  {
    title: 'Setting',
    path: '/setting',
    component: () => <div>Setting</div>,
  }
];

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div
          style={{
            width: '60px',
            marginRight: '10px',
            padding: '20px',
            backgroundColor: '#ccc'
          }}
        >
          {routes.map((item) =>
            <Route
              exact={item.exact}
              path={item.path}
              children={({ match }) =>
                <div>
                  {match ? '>' : ''}
                  <Link to={item.path}>{item.title}</Link>
                </div>
              }
            />
          )}
        </div>
        <div
          style={{
            flex: 1
          }}
        >
          {routes.map((item) =>
            <Route exact={item.exact} path={item.path} component={item.component} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
