import { logoIcons } from "../constants";
import TitleHeader from "../components/TitleHeader";

const LogoScroll = () => {
  const duplicatedList = [...logoIcons, ...logoIcons];

  return (
    <section id="tech" className="w-full flex flex-col items-center justify-center pt-40">
      
      <TitleHeader title="Tech I Use – Projects's power" />

      <div className="scroller relative z-20 w-[90vw] max-w-[1680px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mt-12">
        <ul className="flex h-fit w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll hover:[animation-play-state:paused]">
          {duplicatedList.map((icon, index) => (
            <li
              key={index}
              className="relative flex flex-col w-[159px] md:w-[200px] max-w-full flex-shrink-0 items-center justify-center rounded-2xl border border-slate-700 px-8 py-6"
              style={{
                background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              <img src={icon.imgPath} alt={icon.name} className="h-12 w-auto object-contain" />
              <p className="text-sm text-white mt-2 text-center">{icon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoScroll;
