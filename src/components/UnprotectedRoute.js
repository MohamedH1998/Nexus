import React from 'react'
import {Route, Redirect,} from 'react-router-dom'
import LoadingPage from './LoadingPage'


const UnProtectedRoute = ({ isLoading, isAuth, children, ...rest}) => {
    return (
        <div>
            <Route {...rest} render={(props) => {
                if (isLoading) {
                    return <LoadingPage/>
                } else if (!isLoading && !isAuth) {
                    return children
                } else if (!isLoading && isAuth) {
                    return (
                        <Redirect to={{pathname: '/', state: { from: props.location}}}/>
                    )
                }
            }}/>
        </div>
    )
}

export default UnProtectedRoute
