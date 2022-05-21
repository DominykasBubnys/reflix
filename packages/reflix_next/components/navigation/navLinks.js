import React from 'react';
import Link from 'next/link';
import classes from './navLinks.module.css';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ListItemBtn from "../listItemBtn";

const NavLinks = props => {

  const navigation = useRouter();
  const {logout} = useAuth();
  const Auth = useAuth();

  const AuthLogoutHandler = async() => {
    console.log("loging out...")
    await logout();
    navigation.push("/");
  }

  const AuthLoginHandler = () => {
    navigation.push("/auth-authenticate");

  }

  return <ul className={classes.nav_links}>
    <li>
      <Link href={"/movies/category/most-popular"}>POPULAR</Link>
    </li>

    <li>
      <Link href="/movies/category/top-rated">TRENDS</Link>
    </li>

    <li>
      <Link href="/auth-library">LIBRARY</Link>
    </li>
    
    <li className={classes.auth_link}>
      {!Auth.currentUser && <button className={classes.button} onClick={AuthLoginHandler}>AUTHENTICATE</button>}
      {Auth.currentUser && <button className={classes.button} onClick={AuthLogoutHandler}>LOGOUT</button>}
    </li>
  </ul>
};

export default NavLinks;