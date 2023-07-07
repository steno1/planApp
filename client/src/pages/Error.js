import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../Assets/Wrappers/ErrorPage';
var notFound = require("../Assets/images/errorPage.jpg");
var Error = function () {
    return (React.createElement(Wrapper, { className: 'full-page' },
        React.createElement("div", null,
            React.createElement("img", { src: notFound, alt: 'not found' }),
            React.createElement("h3", null, "Ohh! page not found"),
            React.createElement("p", null, "We can't seem to find the page you're looking for"),
            React.createElement(Link, { to: '/' }, "back home"))));
};
export default Error;
