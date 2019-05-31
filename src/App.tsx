import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './constants/routes';
import Header from './components/common/Header';
import dashboard from './components/dashboard';
import borderRadius from './components/borderRadius';
import rgba from './components/rgba';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <main>
                <Router>
                    <Switch>
                        <Route path={routes.borderRadius} component={borderRadius.List} />
                        <Route path={routes.rgba} component={rgba.List} />
                        <Route path={routes.dashboard} component={dashboard.List} />
                    </Switch>
                </Router>
            </main>
        </div>
    );
};

export default App;
