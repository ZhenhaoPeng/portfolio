import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubLink,
  liveLink,
  videoLink,
  powerBILink,
}) => (
  <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        <div className="proj-buttons">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <button className="btn btn-primary">
                <FaGithub size={20} style={{ marginRight: "8px" }} />
                GitHub
              </button>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <button className="btn btn-secondary">
                <FaExternalLinkAlt size={20} style={{ marginRight: "8px" }} />
                Live Preview
              </button>
            </a>
          )}
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <button className="btn btn-success">
                <FaPlayCircle size={20} style={{ marginRight: "8px" }} />
                Watch Demo
              </button>
            </a>
          )}

          {powerBILink && (
            <a
              href={powerBILink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <button className="btn btn-warning">
                <SiPowerbi size={20} style={{ marginRight: "8px" }} />
                Power BI
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  </Col>
);
