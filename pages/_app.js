import "../styles/globals.css";
import "../styles/globals.css";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans();

const App = ({ Component, pageProps }) => {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
