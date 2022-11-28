import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className="dark:bg-neutral-900 bg-neutral-100 h-screen
       selection:bg-red-100/30 selection:text-red-500
       dark:selection:bg-red-300/10 dark:selection:text-red-400
       "
      >
        <svg
          id="texture"
          width="100%"
          height="100%"
          className="pointer-events-none fixed isolate z-50 opacity-40 mix-blend-soft-light"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="10"
              stitchTiles="stitch"
            ></feTurbulence>
            //https://fecolormatrix.com/
            <feColorMatrix
              className="hidden dark:visible"
              type="saturate"
              values="0"
            ></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <Main />
        <NextScript />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="fatihdelice" data-description="Support me on Buy me a coffee!" data-message="" data-color="#dd2a2a" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </body>
    </Html>
  );
}
