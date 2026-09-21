import { useEffect, useRef } from "react";
import poster from "../assets/img/alarm-poster.jpg";

const REEL = `${process.env.PUBLIC_URL}/videos/smart-alarm-reel.mp4`;
const FULL = `${process.env.PUBLIC_URL}/videos/smart-alarm-demo.mp4`;

export const AlarmOnboardingPreview = ({ expanded = false }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;
    el.playbackRate = expanded ? 1 : 1.08;
    const play = el.play();
    if (play) play.catch(() => {});
    return undefined;
  }, [expanded]);

  return (
    <div className={`ob-studio${expanded ? " is-expanded" : ""}`}>
      <div className="al-device">
        <video
          ref={videoRef}
          src={expanded ? FULL : REEL}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          controls={expanded}
        />
      </div>
    </div>
  );
};
