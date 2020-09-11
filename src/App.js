import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Child = ({ match }) => (
  <div>
    ID: {match.params.id}
  </div>
);

// http://localhost:3000/#/order/asc
const ComponentWithRegex = ({ match }) => (
  <div>
    只匹配 order 下的 asc/desc，当前： {match.params.direction}
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/yahoo">Yahoo</Link></li>
          <li><Link to="/huawei">Huawei</Link></li>
        </ul>
        <hr />
        <Route path="/:id" component={Child} />
        <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
      </div>
    </Router>
  );
}

export default App;
