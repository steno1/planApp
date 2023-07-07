import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../Assets/Wrappers/ErrorPage';

const notFound = require("../Assets/images/errorPage.jpg");

const Error: React.FC = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={notFound} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
