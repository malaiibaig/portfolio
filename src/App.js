import React, { useState } from "react";
import * as Icon from "react-feather";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";

function App ()
{
  const [ lightMode, setLightMode ] = useState( false ); // Made it true if you want to load your site light mode primary

  lightMode
    ? document.body.classList.add( "light" )
    : document.body.classList.remove( "light" );

  const handleMode = () =>
  {
    if ( !lightMode )
    {
      setLightMode( true );
      document.body.classList.add( "light" );
    } else
    {
      setLightMode( false );
      document.body.classList.remove( "light" );
    }
  };

  return (
    <>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={ () => handleMode() }
        ></button>
      </div>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <Home lightMode={ lightMode } /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/resume" element={ <Resumes /> } />
          <Route path="/portfolios" element={ <Portfolios /> } />
          <Route path="/blogs" element={ <Blogs /> } />
          <Route path="/blogs/:id/:title" element={ <BlogDetails /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <Notfound /> } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
