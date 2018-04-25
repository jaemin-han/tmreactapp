import React from 'react'
import {
    Link,
    Route,
} from 'react-router-dom'

function Overview(props) {
    return <h1>{props.match.params.overviewId}</h1>
}

export default function Home({ match }) {
    return (
        <div>
            <h1>HOME</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/Hello`}>HELLO</Link>
                </li>
                <li>
                    <Link to={`${match.url}/ONE`}>ONE</Link>
                </li>
                <li>
                    <Link to={`${match.url}/TWO`}>TWO</Link>
                </li>
                <li>
                    <Link to={`${match.url}/THREE`}>Three</Link>
                </li>
            </ul>
            <hr />
            <Route path={`${match.url}/:overviewId`} component={Overview} />
            <Route exact path={match.path} render={() => {
                return <h3>Please Select A Topic</h3>
            }} />

        </div>
    )
}