import "../styles/globals.css";
import "../styles/globals.css";
import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const openSans = Open_Sans();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
