import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
//import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
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
      title: "Student Management (WinForms)",
      description:
        "A Desktop application built with C# and Windows Forms to manage student data, including grades, attendance, and personal information.",
      imgUrl: projImg6,
      videoLink: `${process.env.PUBLIC_URL}/videos/student-management-demo.mp4`,
    },
    {
      title: "Villa Booking – Clean Architecture",
      description:
        "ASP.NET Core MVC project using Clean Architecture with SQL Server and Entity Framework. Features include villa management, amenities, and upcoming booking module.",
      imgUrl: projImg7,
      githubLink: "https://github.com/ZhenhaoPeng/WhiteLagoon",
      videoLink: `${process.env.PUBLIC_URL}/videos/Ferien-Haus-demo.mp4`,
    },

    {
      title: "PwC Switzerland PowerBI Dashboard",
      description:
        "Business Analytics Virtual Experience (Public data, no sensitive info).",
      imgUrl: projImg1,
      powerBILink:
        "https://app.powerbi.com/view?r=eyJrIjoiMDc0MDczZDYtZGRhNS00OGEzLTkyYjctMTk1YjcxNzEwYjc2IiwidCI6IjAwNjljNzMxLTY5YTctNDBjNC05NjA2LWU1MTIxZWQ5YWM4MSIsImMiOjJ9",
    },
    {
      title: "IoT Monitoring (WPF)",
      description: "WPF-Desktopanwendung mit Prism, LiveCharts, MiniExcel, Material Design und SQL-Anbindung via ADO.NET.",
      imgUrl: projImg5,
      githubLink: "https://github.com/ZhenhaoPeng/WPF.MultiTHMonitorProject",
      videoLink: `${process.env.PUBLIC_URL}/videos/WPF-demo.mp4`,
    },
    {
      title: "Online Pizza Ordering System",
      description:
        "React Router data loading, Redux, Redux Toolkit, thunks, Tailwind CSS",
      imgUrl: projImg2,
      githubLink: "https://github.com/ZhenhaoPeng/PizzaOrder",
      liveLink: "https://pizza-order-fyp0qmjl6-zhenhaos-projects.vercel.app/",
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
                        <Nav.Link eventKey="first">My Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Desktop Applications
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Data Analytics</Nav.Link>
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
                                project.title.includes("Web") ||
                                project.title.includes("System") ||
                                project.title.includes("Villa")
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
                              project.title.includes("Desktop") ||
                              project.description.includes("Desktop")
                            )
                            .map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projects
                            .filter((project) =>
                              project.title.includes("PowerBI")
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
