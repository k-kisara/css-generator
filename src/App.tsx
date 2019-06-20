import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './constants/routes';
import Header from './components/common/Header';
import borderRadius from './components/borderRadius';
import dashboard from './components/dashboard';
import rgba from './components/rgba';
import textShadow from './components/textShadow';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path={routes.borderRadius}>
              <borderRadius.List />
            </Route>
            <Route path={routes.rgba}>
              <rgba.List />
            </Route>
            <Route path={routes.textShadow}>
              <textShadow.List />
            </Route>
            <Route path={routes.dashboard}>
              <dashboard.List />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
