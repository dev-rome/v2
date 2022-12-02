import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: ["Full-Stack", "Freelance", "Front-End"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="max-w-[71.25rem] mx-auto">
        <div className="py-44 px-4">
          <h1 className="text-pink mb-2 text-sm">Hi, my name is</h1>
          <h2 className="text-white text-2xl mb-1 md:text-4xl lg:mb-2 lg:text-5xl">
            Jerome Haynes
          </h2>
          <h2 className="text-white mb-2 text-2xl md:text-4xl lg:text-5xl">
            A <span className="text-pink" ref={typedRef}></span>
            Developer
          </h2>
          <p className="text-white md:max-w-3xl lg:max-w-3xl mb-5">
            Software Engineer with the ability to build a web presence from the
            ground up using current best practices. Passionate learner, hard
            worker, and team player proficient in various scripting languages.
          </p>
          <div className="flex gap-5 text-white">
            <motion.a
              className="flex items-center gap-1 bg-pink py-1 px-3"
              href="https://www.linkedin.com/in/jerome-haynes/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>
                <FaLinkedin />
              </span>
              LinkedIn
            </motion.a>
            <motion.a
              className="flex items-center gap-1 bg-pink py-1 px-3"
              href="https://github.com/dev-rome"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>
                <FaGithub />
              </span>
              Github
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
