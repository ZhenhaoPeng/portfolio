export const TrumpfPreview = ({
  expanded = false,
  videoSrc,
  imgUrl,
  title,
}) => (
  <div className={`tf-preview${expanded ? " is-expanded" : ""}`}>
    <header className="tf-nav">
      <div className="tf-brand">
        <i className="tf-sq" aria-hidden="true" />
        <svg
          className="tf-mark"
          viewBox="0 0 118 20"
          role="img"
          aria-label="TRUMPF"
        >
          <text
            x="0"
            y="16"
            fill="#111"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="18"
            fontWeight="800"
            letterSpacing="0.8"
          >
            TRUMPF
          </text>
        </svg>
      </div>
      <nav>
        <b>EventPlaner</b>
        <span>Home</span>
        <span>Eventlist</span>
        <span>Create</span>
        <span>MyEvents</span>
        <span>Help</span>
      </nav>
    </header>
    {videoSrc ? (
      <video
        src={videoSrc}
        poster={imgUrl}
        muted
        autoPlay
        loop
        playsInline
        controls={expanded}
      />
    ) : (
      <img src={imgUrl} alt={title} />
    )}
  </div>
);
