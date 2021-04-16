import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import TechStack from './TechStack/TechStack';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';
import DarkMode from './theme/DarkMode';
import { heroData, aboutData, techData, projectsData, contactData, footerData } from '../data/data';
import PageNavbar from './PageNavbar/PageNavbar';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [tech, setTech] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setTech({ ...techData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, tech, projects, contact, footer }}>
      <DarkMode />
      <PageNavbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
