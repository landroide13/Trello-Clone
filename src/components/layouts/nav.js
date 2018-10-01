import React from 'react'
import { Link } from 'react-router-dom';
import SigninLink from './SigninLink';
import SignoutLink from './SignoutLink';

export default () => {
  return (
    <React.Fragment>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">TrolloClone</Link>
          <SigninLink />
          <SignoutLink />
        </div>
      </nav>
      
    </React.Fragment>
  )
}
