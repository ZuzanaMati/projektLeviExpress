import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';

export const API_BASE_URL = 'https://apps.kodim.cz/daweb/leviexpress/api';

createRoot(document.querySelector('#app')).render(
    <Router>
        <App />
    </Router>);

