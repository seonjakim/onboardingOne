import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import Route from '../router/Route';
import Router from '../router/Router';
import About from '../src/About';
import App from '../src/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Route path='/' component={<App />} />
    <Route path='/about' component={<About />} />
  </Router>
)
