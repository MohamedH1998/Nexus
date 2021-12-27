import React, {useState, useEffect} from 'react'
import './assets/main.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { ReactReduxFirebaseProvider} from 'react-redux-firebase'
import Chat from './components/Chat';
import Conversations from './components/Conversations';
import LandingPage from './components/LandingPage'

import './style.css'
import Nav from './components/Nav';
import PreferencesNav from './components/Nav/PreferencesNav';

import InitialPreferences from './components/InitialPreferences';
import Location from './components/InitialPreferences/Location';
import Avatar from './components/InitialPreferences/Avatar';

import Level from './components/InitialPreferences/Level';
import Jobs from './components/InitialPreferences/Jobs';
import Industries from './components/InitialPreferences/Industries';

import {auth} from './firebase'
import Login from './components/LandingPage/Login';
import Register from './components/LandingPage/Register';
import LoadingPage from './components/LoadingPage';
import { retrievePref, setUser } from './redux/action'
import { rrfProps} from './redux/store'
import { useStore } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'

import DirectChatPage from './components/DirectMessage'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          dispatch(setUser(authUser))
          dispatch(retrievePref(authUser.uid))
      } else {
        return dispatch(setUser(null))
      }
      })
  }, [dispatch])
    const { currentUser } = useSelector(state => state.user)
    const { loading } = useSelector(state => state.user)




  const [pref, setPref] = useState([])
  return (
    <Router>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <Switch>
        <Route path="/loading">
          <LoadingPage/>
          </Route>
        <Route path="/" exact >
          <LandingPage>
            <Login/>
          </LandingPage>
        </Route>
        <Route path="/register" exact>
          <LandingPage>
            <Register/>
          </LandingPage>
        </Route>
        <ProtectedRoute path="/inbox" exact isLoading={loading} isAuth={currentUser}>
          <Nav/>
          <Conversations/>
        </ProtectedRoute>


        <ProtectedRoute path="/directmessage" exact isLoading={loading} isAuth={currentUser}>
          <Nav/>
          <DirectChatPage/>
        </ProtectedRoute>



        <ProtectedRoute path="/inbox/:id" exact isLoading={loading} isAuth={currentUser} >
          <Nav/>
          <Chat/>
        </ProtectedRoute>
        <ProtectedRoute path="/preferences/avatar" exact isAuth={currentUser}>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={20}>
            <Avatar next="/preferences/location" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </ProtectedRoute>
        <ProtectedRoute path="/preferences/location" exact isLoading={loading} isAuth={currentUser}>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={40}>
            <Location previous="/preferences/avatar" next="/preferences/level" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </ProtectedRoute>
        <ProtectedRoute path="/preferences/level" exact isLoading={loading} isAuth={currentUser}>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={60}>
            <Level previous="/preferences/location" next="/preferences/jobs" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </ProtectedRoute>
        <ProtectedRoute path="/preferences/jobs" exact isLoading={loading} isAuth={currentUser}>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={80}>
            <Jobs previous="/preferences/level" next="/preferences/industries" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </ProtectedRoute>
        <ProtectedRoute path="/preferences/industries" exact isLoading={loading} isAuth={currentUser}>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={95}>
            <Industries previous="/preferences/jobs" next="/inbox" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </ProtectedRoute>
        <Route path="/profile">
            <Nav/>
            <Profile/>
          </Route>
        <Route path="*">

            <div>Doesn't exist</div>
        </Route>
      </Switch>
      </ReactReduxFirebaseProvider>
    </Router>
  );
}

export default App