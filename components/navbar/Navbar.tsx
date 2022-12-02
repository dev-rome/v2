import NavbarItem from "./NavbarItem";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-black flex justify-between items-center p-5">
      <ul className="flex gap-4">
        <NavbarItem url={"#home"} title={"Home"} />
        <NavbarItem url={"#about"} title={"About"} />
        <NavbarItem url={"#portfolio"} title={"Portfolio"} />
        <NavbarItem url={"#contact"} title={"Contact"} />
      </ul>
      <div className="flex items-center gap-3 text-white">
        <motion.a
          className=" hover:text-pink"
          href="https://www.linkedin.com/in/jerome-haynes/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          className=" hover:text-pink"
          href="https://www.linkedin.com/in/jerome-haynes/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
