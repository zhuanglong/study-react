import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => <div>首页</div>;
const Info = () => <div>个人信息</div>;
const Setting = () => <div>系统设置</div>;
const About = ({ routes }) => (
  <div>
    系统设置
    <ul>
      <li><Link to="/about/info">个人信息</Link></li>
      <li><Link to="/about/setting">系统设置</Link></li>
    </ul>
    {routes.map((route, index) => (
      <RouteWithSubRoutes key={index} {...route} />
    ))}
  </div>
);

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/info',
        component: Info,
      },
      {
        path: '/about/setting',
        component: Setting,
      }
    ]
  }
];

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">我的</Link></li>
        </ul>
        <hr />
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
