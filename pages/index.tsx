// import Head from "next/head";
import Link from "next/link";
import ImageSVG from "../components/imageSVG/ImageSVG";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="max-w-[71.25rem] mx-auto">
      <div className="grid place-content-center h-screen">
        <div className="flex flex-col items-center gap-y-3">
          <ImageSVG width={400} height={400} />
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 3.9,
              },
            }}
          >
            <Link
              className="bg-pink text-white tracking-wide py-1 px-5"
              href="/home"
            >
              Enter
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
