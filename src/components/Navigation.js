import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

  return (
    <div className="navigation">
      <NavLink  to="/" 
                className= { 
              (thisNav) => thisNav.isActive ? "nav-active" : ''}>Home
      </NavLink>
      <NavLink to="/About" 
               className= { 
                (thisNav) => thisNav.isActive ? "nav-active" : ''}>About
      </NavLink>
    </div>
)};

export default Navigation;