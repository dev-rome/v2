import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section>
        <Hero />
      </section>

      <section>
      <About />
      </section>
    </>
  );
};

export default Home;
