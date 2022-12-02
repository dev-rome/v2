import PortfolioItem from "./PortfolioItem";
import { PortfolioData } from "./PortfolioData";
import { FaGithub, FaSignInAlt } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Portfolio = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <div className="max-w-[71.25rem] mx-auto px-4 pb-44">
        <h2 className="text-pink text-sm mb-2">Portfolio</h2>
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PortfolioData.map((item) => {
            return (
              <PortfolioItem
                key={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                linkOne={item.linkOne}
                linkTwo={item.linkTwo}
                iconOne={<FaGithub />}
                iconTwo={<FaSignInAlt />}
              />
            );
          })}
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Portfolio;
