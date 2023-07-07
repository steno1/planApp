import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(AppProvider, null,
        React.createElement(App, null))));
