import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import ChallengeFocus from 'pages/ChallengeFocus';
import Challenges from 'pages/Challenges';
import Help from 'pages/Help';
import Stats from '../pages/Stats';

const Routes = ({ web3 }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/levels">
        <Challenges />
      </Route>
      <Route path="/level/:name">
        <ChallengeFocus web3={web3} />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/stats">
        <Stats />
      </Route>
      <Redirect push to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
