import { Analytics } from "@vercel/analytics/react";
import "@vercel/examples-ui/globals.css";
import Head from "next/head";
import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Make a dot in between Erich Lehmann and CV */}
        <title>Erich Lehmann · CV</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.chatbaseConfig = {
              chatbotId: "CRzsg2kg93IXjoDn9ICpJ",
            };
          `,
        }}
      />
      <Script
        src="https://www.chatbase.co/embed.min.js"
        id="CRzsg2kg93IXjoDn9ICpJ"
        defer
      />
    </>
  );
}

export default App;
