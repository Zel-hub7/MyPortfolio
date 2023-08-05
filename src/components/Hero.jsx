import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex
      flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Zelalem</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="text-[#915eff]">I'm a software Developer</span> <br /> I can help you build a product , feature or
            website Look through some of my work and experience! If you like
            what you see and have a project you need coded, don’t hesitate to
            contact me.
          </p>
        </div>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
