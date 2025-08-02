const Button = ({
  text,
  className,
  id,
  href,
  isExternal = false,
  direction = "down",
  variant = "default", // "card" or "default"
}) => {
  const handleClick = (e) => {
    if (!href) {
      e.preventDefault();

      const target = document.getElementById("counter");
      if (target && id) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const arrowSrc = direction === "right" ? "/images/arrow-right.svg" : "/images/arrow-down.svg";
  const arrowClass =
    direction === "right"
      ? "size-5 xl:-translate-x-32 translate-x-0 animate-bounce-x group-hover:translate-x-0"
      : "size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0";

  const bgCircleClass =
    variant === "card"
      ? "bg-transparent group-hover:bg-white-50"
      : "bg-white-50";

  const wrapperClass = `cta-button group w-full h-full relative ${variant === "card" ? "bg-transparent" : ""}`;

  return isExternal && href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className={wrapperClass}>
        <div className={`bg-circle ${bgCircleClass}`} />
        <p className={`text ${variant === "card" ? "text-white" : ""}`}>{text}</p>
        <div className="arrow-wrapper">
          <img src={arrowSrc} alt="arrow" className={arrowClass} />
        </div>
      </div>
    </a>
  ) : (
    <a href="#" onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className={wrapperClass}>
        <div className={`bg-circle ${bgCircleClass}`} />
        <p className={`text ${variant === "card" ? "text-white" : ""}`}>{text}</p>
        <div className="arrow-wrapper">
          <img src={arrowSrc} alt="arrow" className={arrowClass} />
        </div>
      </div>
    </a>
  );
};

export default Button;
