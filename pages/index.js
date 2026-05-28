import React, { useState } from 'react';
import Head from 'next/head';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>SonicZone - Premium Audio Gear Store</title>
        <meta name="description" content="Welcome to SonicZone. Discover our curated range of premium headphones, earbuds, speakers, and top-tier audio equipment." />
        <meta name="keywords" content="audio gear, premium headphones, speakers, earbuds, audiophile" />
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search premium products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Handpicked audio gear loved by thousands of customers worldwide</p>
      </div>

      <div className="products-container">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => <Product key={product._id} product={product} />)
        ) : (
          <p className="no-products">No products found matching your search.</p>
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
