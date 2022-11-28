import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";

const Welcome = () => {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid place-content-center h-screen">
          <div className="flex flex-col items-center gap-y-3">
            <Image src={Logo} alt="logo" width="400" priority />
            <Link
              className="bg-pink text-white tracking-wide py-1 px-5 hover:duration-300 hover:ease-linear hover:bg-white hover:text-pink md:text-lg"
              href="/home"
            >
              Enter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
