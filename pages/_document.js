import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className=""
      >
        <main className="antialiased max-w-3xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto font-sans text-gray-200">
          <Navbar />
          <Main />
          <NextScript />
        </main>

      </body>
    </Html>
  );
}
