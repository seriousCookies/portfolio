import React, { useState, useEffect } from 'react';
import {  Navbar, Nav, Container, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';

import Fade from 'react-reveal/Fade';

const PageNavbar = () => {
  
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  return (
    <Navbar className="align-self-start" expand="lg">
    <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Brand><Link to="navAbout" smooth duration={1000}>About |</Link></Navbar.Brand>
  <Navbar.Brand><Link to="techskills" smooth duration={1000}>Tech Skills |</Link></Navbar.Brand>
  <Navbar.Brand><Link to="projects" smooth duration={1000}>Projects |</Link></Navbar.Brand>
  <Navbar.Brand><Link to="contact" smooth duration={1000}>Contact |</Link></Navbar.Brand>
</Fade>
</Navbar>
  )
}

export default PageNavbar
