import { skills } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Skills = () => {
  return (
     <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">

        <TitleHeader
          title="Check Out My Skills"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {skills.map((skill, index) => (
            <GlowCard card={skill} key={index} index={index}>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
