import { Analytics } from "@vercel/analytics/react";

import "@vercel/examples-ui/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Make a dot in between Erich Lehmann and CV */}
        <title>Erich Lehmann · CV</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
