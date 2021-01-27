import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from '@fortawesome/free-solid-svg-icons'
import Timeline from '../Timeline/Timeline';

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
            const { title, info, info2, info3, url, repo, img, id } = project;

            return (
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#493240", color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #493240' }}
            iconStyle={{ background: "#493240", color: '#e3d0d8' }}
            icon={<FontAwesomeIcon icon={faCode} size="2x" />}
          >
            <h3 className="text-uppercase vertical-timeline-element-title">{title}</h3>
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
            <p className= "font-italic"> {info || ""}</p>
            <h3 className="mb-4">{info2 || ''}</h3>
          </div>
          <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
          <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                        </a>
                        
                        <p>Built with {info3}</p>
                        <br/>
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


