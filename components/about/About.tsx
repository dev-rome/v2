import AboutTechList from "./AboutTechList";
import { AboutTechData } from "./AboutTech";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import SelfImage from "../../public/images/jh.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <div className="max-w-[71.25rem] mx-auto px-4 pb-44">
        <h2 className="text-pink text-sm mb-2">About Me</h2>
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-2">
          <div>
            <p className="text-white mb-5">
              Hello! my name is Jerome, a software engineer in New York. My
              passion for web development sparked in 2018 when I completed my
              first course with Codecademy Programming with Python. Completing
              that course sparked a passion for learning and growth.
            </p>
            <p className="text-white mb-5">
              I also finished Udacity course Intro to Programming Nanodegree,
              three Udemy courses such as The Web Developer Bootcamp, Build
              Responsive Real-World Websites with HTML and CSS, and Modern React
              with Redux. In the future, I see myself as a full-stack engineer
              supporting clients and building products that will give back to
              communities.
            </p>
            <p className="text-white mb-8">
              Currently, a graduate of General Assembly part-time software
              engineer immersive course, also still expanding my learning and
              best practices. When I am not in class or freelancing, you can
              find me on twitch playing games such as Valorant, League of
              Legends, or Lost Ark. Also a fan of basketball, reading, and
              working out.
            </p>
            <div>
              <h3 className="text-pink text-sm mb-2">Tech</h3>
              <ul className="grid grid-cols-2">
                {AboutTechData.map((item) => {
                  return (
                    <AboutTechList
                      key={item.id}
                      icon={<FaAngleRight />}
                      tech={item.tech}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="grid justify-center">
            <Image src={SelfImage} alt="Jerome Haynes" height={400} priority />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default About;
