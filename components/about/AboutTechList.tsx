interface AboutTechProps {
  tech: string;
  icon: JSX.Element;
}

const AboutTechList = ({ tech, icon }: AboutTechProps) => {
  return (
    <li className="flex items-center gap-1">
      <span className="text-pink">{icon}</span>
      <span className="text-white text-sm"> {tech}</span>
    </li>
  );
};

export default AboutTechList;
