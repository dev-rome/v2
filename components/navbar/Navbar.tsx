import NavbarItem from "./NavbarItem";
import NavToggle from "./NavToggle";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { motion, useCycle, Variants } from "framer-motion";

const sideNavbar: Variants = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const sideNavItems: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="absolute top-0 bottom-0 w-[100px] z-10"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="bg-white absolute top-0 left-0 bottom-0 w-[100px]"
        variants={sideNavbar}
      />
      <NavToggle toggle={() => toggleOpen()} />
      <motion.ul
        className="flex flex-col justify-center gap-7 p-6 absolute top-[250px] w-[160]"
        variants={sideNavItems}
      >
        <NavbarItem url={"/"} icon={<FaHome />} />
        <NavbarItem url={"/"} icon={<FaUser />} />
        <NavbarItem url={"/"} icon={<FaBriefcase />} />
        <NavbarItem url={"/"} icon={<FaEnvelope />} />
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
