import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthorContext';
import { useNavigate } from 'react-router-dom'
import classes from './navLinks.module.css';

const NavLinks = props => {

  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();


  const AuthLogoutHandler = async() => {
    
    try {
      await logout();
      navigate("/")

    } catch (error) {
      console.log("failed to logout ", error)
    }

  }


  return <ul className={classes.nav_links}>
    <li>
      <NavLink to="/most-popular">POPULAR</NavLink>
    </li>

    <li>
      <NavLink to="/top-rated">TRENDS</NavLink>
    </li>

    { currentUser && <>
      <li>
        <NavLink to="/auth-library">LIBRARY</NavLink>
      </li>
      
      <li>
        <NavLink to="/profile">PROFILE</NavLink>
      </li>
    </>}
    
    <li className={classes.auth_link}>
      {!currentUser && <NavLink to="/auth">AUTHENTICATE</NavLink>}
      {currentUser && <NavLink onClick={AuthLogoutHandler} to="/">LOGOUT</NavLink>}
    </li>
  </ul>
};

export default NavLinks;