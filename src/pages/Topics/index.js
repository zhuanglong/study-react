import React from 'react';
import { Route, Link } from 'react-router-dom';

const Topic = ({ match }) => (
    <div>topicId：{match.params.topicId}</div>
);

class Topics extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <div>Topics</div>
                <ul>
                    <li><Link to={`${match.url}/1`}>topic 1</Link></li>
                    <li><Link to={`${match.url}/2`}>topic 2</Link></li>
                </ul>
                <br />
                <Route exact path={`${match.url}/:topicId`} component={Topic} />
            </div>
        );
    }
}

export default Topics;