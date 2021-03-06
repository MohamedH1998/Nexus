import React from 'react'
import {Route, Redirect,} from 'react-router-dom'
import LoadingPage from './LoadingPage'


const ProtectedRoute = ({ isLoading, isAuth, children, ...rest}) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const delayHomeRender = async (param) => {
        await delay(5000);
        return param
      };
    return (
        <div>
            <Route {...rest} render={(props) => {
                if (isLoading) {
                    return <LoadingPage/>
                } else if (!isLoading && isAuth) {
                    return children
                } else if (!isLoading && !isAuth) {
                    return (
                        <Redirect to={{pathname: '/', state: { from: props.location}}}/>
                    )
                }
            }}/>
        </div>
    )
}

export default ProtectedRoute
