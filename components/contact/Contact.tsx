import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <div className="max-w-[71.25rem] mx-auto px-4 pb-36">
        <h2 className="text-pink text-sm text-center mb-2">Contact</h2>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-white text-4xl mb-2">Get In Touch</h3>
          <p className="text-white mb-5">
            Currently available for hire, my inbox is always open. Also avaiable
            for freelance work.
          </p>
          <motion.a
            className="flex items-center gap-1 bg-pink text-white py-1 px-3"
            href="mailto:haynesjerome@gmail.com"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>
              <FaEnvelope />
            </span>
            Contact
          </motion.a>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Contact;
