import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Make a dot in between Erich Lehmann and CV */}
        <title>Erich Lehmann - Curriculum Vitae</title>
        <meta name="description" content="Erich Lehmann's CV - Founder and Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Erich Lehmann" />
        <meta
          name="keywords"
          content="Erich Lehmann, CV, Curriculum Vitae, Founder, Builder, Sales, Business Development, Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
