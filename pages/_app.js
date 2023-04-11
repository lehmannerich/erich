import { Analytics } from "@vercel/analytics/react";

import "@vercel/examples-ui/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Erich Lehmann</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
