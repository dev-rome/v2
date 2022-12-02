import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/footer";
import { motion } from "framer-motion";
import "animate.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <header>
        <Navbar />
      </header>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
};

export default Home;
