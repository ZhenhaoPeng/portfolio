import { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import { AlarmOnboardingPreview } from "./AlarmOnboardingPreview";
import { LagerSuitePreview } from "./LagerSuitePreview";
import { TrumpfPreview } from "./TrumpfPreview";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaExpand } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";

function PreviewBody({
  previewKind,
  showFrames,
  frames,
  frame,
  title,
  imgUrl,
  imgFit,
  expanded,
  videoSrc,
}) {
  if (previewKind === "alarm-onboarding") return <AlarmOnboardingPreview expanded={expanded} />;
  if (previewKind === "lager-modules") return <LagerSuitePreview expanded={expanded} />;
  if (previewKind === "trumpf") {
    return (
      <TrumpfPreview
        expanded={expanded}
        videoSrc={videoSrc}
        imgUrl={imgUrl}
        title={title}
      />
    );
  }
  if (showFrames) {
    return (
      <div className="browser-frame">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>hao.studio</span>
        </div>
        <div className="proj-frames">
          {frames.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === 0 ? title : ""}
              className={`proj-frame${i === 0 ? " is-base" : ""}${
                i === frame ? " is-active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
  if (expanded && videoSrc) {
    return (
      <div className="browser-frame">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>{title}</span>
        </div>
        <video src={videoSrc} controls autoPlay playsInline muted loop />
      </div>
    );
  }
  if (expanded) {
    return (
      <div className="browser-frame">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>{title}</span>
        </div>
        <img
          src={imgUrl}
          alt={title}
          className={imgFit === "contain" ? "proj-img-contain" : undefined}
        />
      </div>
    );
  }
  return (
    <img
      src={imgUrl}
      alt={title}
      className={imgFit === "contain" ? "proj-img-contain" : undefined}
    />
  );
}

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubLink,
  liveLink,
  videoLink,
  previewVideo,
  previewFrames,
  previewKind,
  powerBILink,
  imgFit,
  detail,
}) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [playing, setPlaying] = useState(Boolean(previewVideo || videoLink));
  const [videoOk, setVideoOk] = useState(true);
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const [frame, setFrame] = useState(0);
  const previewSrc = previewVideo || videoLink;
  const showVideo = Boolean(previewSrc) && videoOk && previewKind !== "trumpf";
  const frames = previewFrames?.length ? previewFrames : null;
  const showCustom =
    previewKind === "alarm-onboarding" ||
    previewKind === "lager-modules" ||
    previewKind === "trumpf";
  const showFrames = Boolean(frames) && frames.length > 1 && !showVideo && !showCustom;
  const hasMotion = showVideo || showFrames || showCustom;
  const canExpand = true;
  const isInteractive = previewKind === "lager-modules";

  useEffect(() => {
    if (!showFrames) return undefined;
    const id = setInterval(() => {
      setFrame((i) => (i + 1) % frames.length);
    }, 2400);
    return () => clearInterval(id);
  }, [showFrames, frames]);

  useEffect(() => {
    if (!showVideo) return undefined;
    const el = videoRef.current;
    const card = cardRef.current;
    if (!el || !card) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const play = el.play();
          if (play) play.catch(() => {});
          setPlaying(true);
        } else {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );
    io.observe(card);
    return () => io.disconnect();
  }, [showVideo]);

  useEffect(() => {
    if (!showcaseOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setShowcaseOpen(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showcaseOpen]);

  const openShowcase = (e) => {
    if (!canExpand) return;
    if (e.target.closest("button, a, .ls-pill, .ls-del")) return;
    setShowcaseOpen(true);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        ref={cardRef}
        className={`proj-imgbx${hasMotion ? " has-preview" : ""}${
          playing ? " is-playing" : ""
        }${isInteractive ? " has-interactive" : ""}${canExpand ? " can-expand" : ""}`}
        onClick={openShowcase}
      >
        <PreviewBody
          previewKind={previewKind}
          showFrames={showFrames}
          frames={frames}
          frame={frame}
          title={title}
          imgUrl={imgUrl}
          imgFit={imgFit}
          videoSrc={previewKind === "trumpf" ? previewSrc : undefined}
        />
        {showVideo && (
          <video
            ref={videoRef}
            className="proj-preview"
            src={previewSrc}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            onError={() => setVideoOk(false)}
          />
        )}
        {canExpand && (
          <div className="proj-expand" aria-hidden="true">
            <FaExpand size={12} />
            Open
          </div>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-buttons">
            {canExpand && (
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setShowcaseOpen(true)}
              >
                <FaExpand size={16} style={{ marginRight: "8px" }} />
                Open
              </button>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <button type="button" className="btn btn-secondary">
                  <FaExternalLinkAlt size={20} style={{ marginRight: "8px" }} />
                  Live Preview
                </button>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
              >
                <button type="button" className="btn btn-primary">
                  <FaGithub size={20} style={{ marginRight: "8px" }} />
                  GitHub
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
                <button type="button" className="btn btn-warning">
                  <SiPowerbi size={20} style={{ marginRight: "8px" }} />
                  Power BI
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      {showcaseOpen && canExpand && (
        <div
          className="showcase-modal"
          onClick={() => setShowcaseOpen(false)}
          role="presentation"
        >
          <div
            className="showcase-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              type="button"
              className="demo-modal-close"
              onClick={() => setShowcaseOpen(false)}
              aria-label="Close"
            >
              <FaTimes size={18} />
            </button>
            <div className="showcase-stage">
              <PreviewBody
                previewKind={previewKind}
                showFrames={showFrames}
                frames={frames}
                frame={frame}
                title={title}
                imgUrl={imgUrl}
                imgFit={imgFit}
                videoSrc={
                  previewKind === "trumpf" || showVideo ? previewSrc : undefined
                }
                expanded
              />
            </div>
            <div className="showcase-copy">
              <h3>{title}</h3>
              <p>{description}</p>
              {detail && <p className="showcase-detail">{detail}</p>}
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};
