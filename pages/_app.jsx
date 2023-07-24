import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { seo } from "../util/seo";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <main className="antialiased max-w-3xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto font-sans text-gray-200">
          <Navbar />
          <AnimatePresence exitBeforeEnter={true} initial={false}>
            <DefaultSeo {...seo} />
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
