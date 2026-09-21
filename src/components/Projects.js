import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projHao1 from "../assets/img/hao-preview-1.png";
import projHao2 from "../assets/img/hao-preview-2.png";
import projHao3 from "../assets/img/hao-preview-3.png";
import projAlarm1 from "../assets/img/alarm-preview-1.png";
import projLager1 from "../assets/img/lager-preview-1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const haoFrames = [projHao1, projHao2, projHao3];

export const Projects = () => {
  const projects = [
    {
      title: "HAO Studio",
      description:
        "Jewelry e-commerce with Next.js, Supabase, Stripe checkout, cart, and an admin dashboard.",
      imgUrl: projHao1,
      previewFrames: haoFrames,
      category: "web",
    },
    {
      title: "Smart Alarm",
      description:
        "A companion alarm: Whiskers the cat, morning brief, rise partners, wind-down, points shop, and sleep stats.",
      imgUrl: projAlarm1,
      previewKind: "alarm-onboarding",
      category: "mobile",
    },
    {
      title: "LagerSuite",
      description:
        "Desktop warehouse software: stock, inbound/outbound, quality checks, and reports in one window.",
      detail:
        "INV is inventory, MOV is goods movement, REP is reports, QMS is quality, SET is settings. Click a color to open that module on the canvas, or close it with ×. Built as a Windows desktop app with a local database.",
      imgUrl: projLager1,
      previewKind: "lager-modules",
      category: "desktop",
    },
    {
      title: "TRUMPF Event Management System",
      description:
        "Internal event platform I built at TRUMPF — create events, register colleagues, and manage participants.",
      detail:
        "Event planners publish holiday menus and recurring offers; staff sign up from the intranet; remaining seats, attendance, and CSV / Excel / PDF export stay in one admin view. Built with C#, .NET Core, and MS SQL.",
      imgUrl: projImg3,
      previewKind: "trumpf",
      category: "web",
      videoLink: `${process.env.PUBLIC_URL}/videos/internal-crm-demo.mp4`,
    },
    {
      title: "Student Management (WinForms)",
      description:
        "A Desktop application built with C# and Windows Forms to manage student data, including grades, attendance, and personal information.",
      imgUrl: projImg6,
      category: "desktop",
      videoLink: `${process.env.PUBLIC_URL}/videos/student-management-demo.mp4`,
    },
    {
      title: "Villa Booking – Clean Architecture",
      description:
        "ASP.NET Core MVC project using Clean Architecture with SQL Server and Entity Framework. Features include villa management, amenities, and upcoming booking module.",
      imgUrl: projImg7,
      category: "web",
      githubLink: "https://github.com/ZhenhaoPeng/WhiteLagoon",
      videoLink: `${process.env.PUBLIC_URL}/videos/Ferien-Haus-demo.mp4`,
    },
    {
      title: "PwC Switzerland PowerBI Dashboard",
      description:
        "Business Analytics Virtual Experience (Public data, no sensitive info).",
      imgUrl: projImg1,
      category: "analytics",
      powerBILink:
        "https://app.powerbi.com/view?r=eyJrIjoiMDc0MDczZDYtZGRhNS00OGEzLTkyYjctMTk1YjcxNzEwYjc2IiwidCI6IjAwNjljNzMxLTY5YTctNDBjNC05NjA2LWU1MTIxZWQ5YWM4MSIsImMiOjJ9",
    },
    {
      title: "IoT Monitoring (WPF)",
      description:
        "WPF-Desktopanwendung mit Prism, LiveCharts, MiniExcel, Material Design und SQL-Anbindung via ADO.NET.",
      imgUrl: projImg5,
      category: "desktop",
      githubLink: "https://github.com/ZhenhaoPeng/WPF.MultiTHMonitorProject",
      videoLink: `${process.env.PUBLIC_URL}/videos/WPF-demo.mp4`,
    },
  ];

  const renderProjects = (list) =>
    list.map((project, index) => <ProjectCard key={index} {...project} />);

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
                  <h2>Selected work</h2>
                  <p>
                    A few products I designed and built — from a companion alarm
                    to commerce, warehouse software, and internal tools.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">
                          Desktop Applications
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>{renderProjects(projects)}</Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {renderProjects(
                            projects.filter((project) => project.category === "web")
                          )}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {renderProjects(
                            projects.filter(
                              (project) => project.category === "mobile"
                            )
                          )}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {renderProjects(
                            projects.filter(
                              (project) => project.category === "desktop"
                            )
                          )}
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
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
