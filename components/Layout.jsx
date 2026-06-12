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
        <meta name="keywords" content="premium audio, headphones, earphones, speakers, audiophile" />
        <meta name="author" content="SonicZone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph for Facebook, LinkedIn, Discord */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SonicZone - Premium Audio Gear" />
        <meta property="og:description" content="Shop premium audio gear, headphones, earphones, speakers and more at SonicZone." />
        <meta property="og:site_name" content="SonicZone" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SonicZone - Premium Audio Gear" />
        <meta name="twitter:description" content="Shop premium audio gear, headphones, earphones, speakers and more at SonicZone." />
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
