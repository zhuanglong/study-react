import React from 'react';
import { HashRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

// 登录状态
const fakeAuth = {
  isLogined: false,
  signin(cb) {
    this.isLogined = true;
    cb && setTimeout(cb, 100);
  },
  signout(cb) {
    this.isLogined = false;
    cb && setTimeout(cb, 100);
  }
}

const Home = () => (
  <div>首页</div>
);

const About = () => (
  <div>个人中心</div>
);

const AuthButton = withRouter(
  ({ history }) => (
    fakeAuth.isLogined ?
      <div>
        已登录，<button onClick={() => fakeAuth.signout(() => history.push('/'))}>登出</button>
      </div>
      :
      <div>
        未登录，不能查看“个人中心”
      </div>
  )
);

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.signin(() => {
      this.setState({ redirectToReferrer: true })
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    
    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <button onClick={this.login}>登录</button> 后更多精彩
      </div>
    )
  }
}

// 路由验证
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isLogined ?
        <Component {...props} />
        :
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
);

function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">个人中心</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
