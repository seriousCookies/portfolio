import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import NextSection from '../NextSection/NextSection';

const TechStack = () => {
  const { tech } = useContext(PortfolioContext);

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
    <section id="techskills">
      <Container>
        <Title title="Tech Skills" />
        <Row className="project-wrapper">
          {Object.keys(tech).map((key) => (
            <Col md={4} sm={8}>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <h3 className="font-weight-bold text-uppercase">{key}</h3>
                <br />
              </Fade>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="project-wrapper__info">
                  <p className="text-center">
                    {(tech[key] && tech[key].split(',').map((i) => <p>{i}</p>)) || ''}
                  </p>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TechStack;
