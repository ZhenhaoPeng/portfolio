import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal Website with GitHub and Live Link",
      imgUrl: projImg5,
      liveLink: "https://zhenhaopeng.github.io/portfolio/",
      githubLink: "https://github.com/ZhenhaoPeng/portfolio",
    },
    {
      title: "Online Pizza Ordering System",
      description:
        "React Router data loading, Redux, Redux Toolkit, thunks, Tailwind CSS",
      imgUrl: projImg2,
      liveLink: "https://pizza-order-fyp0qmjl6-zhenhaos-projects.vercel.app/",
      githubLink: "https://github.com/ZhenhaoPeng/PizzaOrder",
    },
    // {
    //   title: "Hotel Booking System",
    //   description:
    //     "Next.js ,app router, React Server Components, server actions, authentication with NextAuth",
    //   imgUrl: projImg4,
    //   liveLink: "https://ecommercewebsite.com",
    //   githubLink: "https://github.com/ecommercerepo",
    // },
    {
      title: "TRUMPF Event Management System",
      description:
        "Internal project built with C#, .NET Core, MS SQL(Demo Video Only)",
      imgUrl: projImg3,
      videoLink: `${process.env.PUBLIC_URL}/videos/internal-crm-demo.mp4`,
    },
    {
      title: "PwC Switzerland Dashboard Power BI",
      description:
        "Virtual Experience Program in Business Analytics (Public data, contains no sensitive information).",
      imgUrl: projImg1,
      powerBILink:
        "https://app.powerbi.com/view?r=eyJrIjoiMDc0MDczZDYtZGRhNS00OGEzLTkyYjctMTk1YjcxNzEwYjc2IiwidCI6IjAwNjljNzMxLTY5YTctNDBjNC05NjA2LWU1MTIxZWQ5YWM4MSIsImMiOjJ9",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I have worked on, including
                    personal projects, professional internships, and analytics
                    dashboards.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Analytics</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter(
                              (project) =>
                                project.githubLink ||
                                project.liveLink ||
                                project.videoLink
                            )
                            .map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects
                            .filter((project) =>
                              project.title.includes("Power BI")
                            )
                            .map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
