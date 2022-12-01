import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
        <div className="py-36 px-4 md:px-8">
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
            <Link
              className="flex items-center gap-1 bg-pink py-1 px-3"
              href="#"
            >
              <span>
                <FaLinkedin />
              </span>
              LinkedIn
            </Link>
            <Link
              className="flex items-center gap-1 bg-pink py-1 px-3"
              href="#"
            >
              <span>
                <FaGithub />
              </span>
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
