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
function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          console.log(authUser.uid)
          dispatch(setUser(authUser))
          dispatch(retrievePref(authUser.uid))
      } else {
        return dispatch(setUser(null))
      }
      })
  }, [dispatch])

    // currentUser && retrievePref(currentUser.uid)



  const [pref, setPref] = useState([])
  return (
    <Router>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <Switch>
        <Route path="/loading">
          <LoadingPage/>
          </Route>
        <Route path="/" exact>
          <LandingPage>
            <Login/>
          </LandingPage>
        </Route>
        <Route path="/register" exact>
          <LandingPage>
            <Register/>
          </LandingPage>
        </Route>
        <Route path="/inbox" exact >
          <Nav/>
          <Conversations/>
        </Route>
        <Route path="/inbox/:id" exact>
          <Nav/>
          <Chat/>
        </Route>
        <Route path="/preferences/location" exact>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={25}>
            <Location previous="#" next="/preferences/level" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </Route>
        <Route path="/preferences/level" exact>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={50}>
            <Level previous="/preferences/location" next="/preferences/jobs" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </Route>
        <Route path="/preferences/jobs" exact>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={75}>
            <Jobs previous="/preferences/level" next="/preferences/industries" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </Route>
        <Route path="/preferences/industries" exact>
        <PreferencesNav/>
          <InitialPreferences percentageProgress={95}>
            <Industries previous="/preferences/jobs" next="/inbox" pref={pref} setPref={setPref}/>
          </InitialPreferences>
        </Route>
      </Switch>
      </ReactReduxFirebaseProvider>
    </Router>
  );
}

export default App