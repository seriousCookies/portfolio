import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <VerticalTimeline>

          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#493240", color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #493240' }}
            iconStyle={{ background: "#493240", color: '#fff' }}
            icon={<i class="fas fa-laptop-code"></i>}
          >
            <h3 className="text-uppercase vertical-timeline-element-title">{title}</h3>
            <br/>
    <Col>
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={500}
        distance="30px"
      >
        <div className="project-wrapper__text">
          <div>
            <h4>
              {info || ""}</h4>
            <h4 className="mb-4">{info2 || ''}</h4>
          </div>
          {repo && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={repo}
            >
              Source Code
            </a>
          )}
        </div>
      </Fade>
    </Col>
          </VerticalTimelineElement>)
          })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Projects;


