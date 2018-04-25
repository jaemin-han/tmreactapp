import React from 'react'
import {
    Link,
    Route,
} from 'react-router-dom'

function Topic(props) {
    return <h1>{props.match.params.topicId}</h1>
}

export default function Topics({ match }) {
    return (
        <div>
            <h1>TOPICS</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering With React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props Vs State</Link>
                </li>
                <li>
                    <Link to={`${match.url}/jaemin`}>Jaemin Han</Link>
                </li>
            </ul>
            <hr />
            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route exact path={match.path} render={() => {
                return <h3>Please Select A Topic</h3>
            }} />

        </div>
    )
}