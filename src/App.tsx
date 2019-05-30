import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/common/Header';
import rgba from './components/rgba';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <main>
                <Router>
                    <main>
                        <Route path='/rgba' component={rgba.List} />
                    </main>
                </Router>
            </main>
        </div>
    );
};

export default App;
