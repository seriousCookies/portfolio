import React, { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import { Form } from 'react-bootstrap';
import Hero from './Hero/Hero';
import About from './About/About';
import TechStack from './TechStack/TechStack';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider, ThemeProvider } from '../context/context';
import { heroData, aboutData, techData, projectsData, contactData, footerData } from '../data/data';
import PageNavbar from './PageNavbar/PageNavbar';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [tech, setTech] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const darkMode = useDarkMode(true);
  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
    return darkTheme ? darkMode.disable() : darkMode.enable();
  };

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
      <ThemeProvider value={{ darkTheme }}>
        <Form.Check
          checked={darkTheme}
          onChange={toggleDarkMode}
          type="switch"
          id="dark-mode-switch"
          label={darkTheme ? 'Dark' : 'Light'}
        />
        <PageNavbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </ThemeProvider>
    </PortfolioProvider>
  );
}

export default App;
