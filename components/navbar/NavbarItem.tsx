import Link from "next/link";
import { motion, Variants } from "framer-motion";

const NavbarItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,

      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const NavbarItem = ({ url, icon }: { url: string; icon: JSX.Element }) => {
  return (
    <div className="flex items-center gap-2">
      <motion.li
        className="flex items-center justify-center bg-pink text-white h-7 w-7 rounded-full"
        variants={NavbarItemVariants}
      >
        <Link href={url}>{icon}</Link>
      </motion.li>
    </div>
  );
};

export default NavbarItem;
