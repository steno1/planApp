import React from 'react';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Register, Dashboard } from './pages';
function App() {
    return (React.createElement(BrowserRouter, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Dashboard, null) }),
            React.createElement(Route, { path: "/register", element: React.createElement(Register, null) }),
            React.createElement(Route, { path: "/landing", element: React.createElement(Landing, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(Error, null) }))));
}
export default App;
