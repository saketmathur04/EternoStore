import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <Head>
        <title>Order Success - SonicZone</title>
        <meta name="description" content="Thank you for your purchase from SonicZone. Your order has been placed successfully." />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:support@soniczone.com">
            support@soniczone.com
          </a>
        </p>
        <Link href="/">
          <div className="btn-container">
            <button type="button" className="btn">
              Continue Shopping
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Success
