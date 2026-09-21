import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={10} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Selected work</span>
                  <h1>Zhenhao Peng</h1>
                  <p>
                    I design and ship products — companion apps, commerce, and
                    desktop systems. The work comes first.
                  </p>
                  <HashLink to="#projects" className="banner-cta">
                    View selected work <ArrowRightCircle size={25} />
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
