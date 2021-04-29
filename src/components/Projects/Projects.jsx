import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PortfolioContext, { ThemeContext } from '../../context/context';

import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import 'react-vertical-timeline-component/style.min.css';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const { darkTheme } = useContext(ThemeContext);

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

  const timelineStyles = {
    light: {
      content: { background: '#c51162', color: '#fff' },
      contentArrow: { borderRight: '7px solid  #c51162' },
      icon: { background: '#c51162', color: '#fff' },
    },
    dark: {
      content: { background: '#80004d', color: '#ffe0f3' },
      contentArrow: { borderRight: '7px solid  #80004d' },
      icon: { background: '#80004d', color: '#ffe0f3' },
    },
  };
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
                  key={id}
                  className="vertical-timeline-element--work"
                  contentStyle={timelineStyles[darkTheme ? 'dark' : 'light'].content}
                  contentArrowStyle={timelineStyles[darkTheme ? 'dark' : 'light'].contentArrow}
                  iconStyle={timelineStyles[darkTheme ? 'dark' : 'light'].icon}
                  icon={<FontAwesomeIcon icon={faCode} size="2x" />}
                >
                  <h3 className=" mt-4 font-weight-bold text-uppercase vertical-timeline-element-title">
                    {title}
                  </h3>
                  <Col>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="p-3">
                        <div>
                          <h5 className=" pb-4 text-center font-italic"> {info || ''}</h5>
                          <h3 className="text-left mb-4">{info2 || ''}</h3>
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
                        <h5 className="my-4 text-left ">Built with {info3}</h5>
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
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
