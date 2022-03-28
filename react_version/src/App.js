import React, {useStatem, useCallback, useState} from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Footer from "./components/footer";
import MainNavigation from "./components/navigation/mainNavigation";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Library from "./pages/Library";
import Profile from "./pages/Profile"
import { useAuth } from "./components/context/AuthorContext";
import Authentication from "./pages/Authentication";
import { AuthProvider } from "./components/context/AuthorContext";

export default function App() {

  const routes = <Routes>
    <Route path="/most-popular" element={<Category category="most popular" />} />
    <Route path="/top-rated" element={<Category category="top rated" />} />
    <Route path="/auth-library" element={<Library />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/auth" element={<Authentication />} />
    <Route path="/details/:movie_id" element={<Details />} />
    <Route path="/" element={<Home />}></Route>
    <Route path="*" element={<Navigate to="/"/>} />
  </Routes>



  return (

    <AuthProvider>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
        <Footer />
      </Router>
    </AuthProvider>
    
  );
}