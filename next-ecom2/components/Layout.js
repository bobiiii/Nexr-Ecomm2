import Footer from './Footer';
import Head from 'next/head';
import Navbar from './Navbar';
// import { createTheme } from '@mui/material/styles';
// import { blue, purple } from '@mui/material/colors';
// import { Store } from '../utilis/Store';
// import { useContext } from 'react';

export default function Layout({ title, description, children }) {
  // const { state, dispatch } = useContext(Store);
  // const { darkMode } = state;
  // const theme = createTheme({
  //   palette: {
  //     type: darkMode ? 'light' : 'dark',
  //     primary: {
  //       main: purple[500],
  //     },
  //     secondary: {
  //       main: blue[500],
  //     },
  //   },
  // });

  return (
    <div>
      <Head>
        <title>{title ? title + ' Next-Ecom' : 'Next-Ecom'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Navbar />
      <div className="container p-3  ">{children}</div>
      <Footer />
    </div>
  );
}
