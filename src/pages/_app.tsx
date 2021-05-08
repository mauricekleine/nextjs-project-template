import { AppProps } from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Next.js Project Template" />

        <title>Next.js Project Template</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
