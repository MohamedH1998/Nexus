import React from 'react'
import './assets/main.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Chat from './components/Chat';
import Conversations from './components/Conversations';
import LandingPage from './components/LandingPage'

import './style.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage/>
        </Route>
        <Route path="/inbox" exact>
          <Conversations/>
        </Route>
        <Route path="/inbox/:id" exact>
          <Chat/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
