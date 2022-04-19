import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import Home from 'pages/Home';
import ChallengeFocus from 'pages/ChallengeFocus';
import Challenges from 'pages/Challenges';
import Help from 'pages/Help';
import { AnimatePresence } from 'framer-motion';
import Stats from '../pages/Stats';

const Routes = ({ web3 }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

export default Routes;
