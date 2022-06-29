import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import {StoreProvider} from "../utilis/Store"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next_Ecom2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
<StoreProvider>
      <Component {...pageProps} />
      </StoreProvider></>
  );
}

export default MyApp;
