
import { skills } from "../data/skills";


const Skills = () => {
  return (
    <section className="px-30 mt-30 mb-20">
      <div className="container">
        <h2 className="text-white text-4xl text-center leading-8">
          Professional{" "}
          <span className="text-[var(--color-primary)]">Skillset</span>{" "}
        </h2>
        <div className="flex flex-col gap-20 mt-20">
          <div className="frontend flex gap-15 items-start justify-between">
            <h2 className="uppercase text-4xl text-[var(--color-primary)] tracking-wide text-center w-[40%]">
              frontend
            </h2>
            <div className="flex flex-wrap gap-5 items-center w-[60%]">
              {skills.frontend.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 leading-20"
                  >
                    <img src={item.img} className="w-8 h-8" />
                    <h3 className="text-white text-2xl font-normal">
                      {item.skill}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tools flex gap-15 items-start justify-between">
            <h2 className="uppercase text-4xl text-[var(--color-primary)] tracking-wide text-center w-[40%]">
              Tools
            </h2>
            <div className="flex flex-wrap gap-5 items-center w-[60%]">
              {skills.tools.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 leading-20"
                  >
                    <img src={item.img} className="w-8 h-8" />
                    <h3 className="text-white text-2xl font-normal">
                      {item.skill}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
