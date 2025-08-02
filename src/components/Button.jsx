const Button = ({
  text,
  className,
  id,
  href,
  isExternal = false,
  direction = "down",
  variant = "default",
}) => {
  const handleClick = (e) => {
    if (!href && id) {
      e.preventDefault();

      const target = document.getElementById("counter"); // your custom scroll
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }

    // Smooth scroll for internal anchor links like #showcase
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
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

  return (
    <a
      href={href || "#"}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
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
