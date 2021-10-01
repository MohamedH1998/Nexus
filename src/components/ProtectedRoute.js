import React from 'react'
import {Route, Redirect,} from 'react-router-dom'

const ProtectedRoute = ({ isAuth, children, ...rest}) => {
    return (
        <div>
            <Route {...rest} render={(props) => {
                if (isAuth) {
                    return children
                } else {
                    return (
                        <Redirect to={{pathname: '/', state: { from: props.location}}}/>
                    )
                }
            }}/>
        </div>
    )
}

export default ProtectedRoute
