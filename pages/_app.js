import { Analytics } from "@vercel/analytics/react";

import "@vercel/examples-ui/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Make a dot in between Erich Lehmann and CV */}
        <title>Erich Lehmann · CV</title>
        <meta
          name="description"
          content="Erich Lehmann's CV - Software Engineer and Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Erich Lehmann" />
        <meta
          name="keywords"
          content="Erich Lehmann, CV, Software Engineer, Developer, Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
