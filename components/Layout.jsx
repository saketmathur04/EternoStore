import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>SonicZone - Premium Audio Gear</title>
        <meta name="description" content="Shop premium audio gear, headphones, earphones, speakers and more at SonicZone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
