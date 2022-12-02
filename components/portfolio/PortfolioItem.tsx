import Image from "next/image";

interface PortfolioItemProps {
  src: string;
  alt: string;
  title: string;
  linkOne: string;
  linkTwo: string;
  iconOne: JSX.Element;
  iconTwo: JSX.Element;
}

const PortfolioItem = ({
  src,
  alt,
  title,
  linkOne,
  linkTwo,
  iconOne,
  iconTwo,
}: PortfolioItemProps) => {
  return (
    <div className="relative group">
      <Image src={src} alt={alt} width="1000" height="1000" priority/>
      <div className="flex flex-col items-center justify-center absolute bottom-0 left-0 right-0 bg-pink overflow-hidden h-0 transition-all ease-linear duration-[250ms] group-hover:h-full">
        <p className="text-white text-sm border-b mb-3">{title}</p>
        <div className="flex items-center gap-3 text-white">
          <a
            className="text-xl hover:animate-bounce"
            href={linkOne}
            target="_blank"
            rel="noreferrer"
          >
            {iconOne}
          </a>
          <a
            className="text-xl hover:animate-bounce"
            href={linkTwo}
            target="_blank"
            rel="noreferrer"
          >
            {iconTwo}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
