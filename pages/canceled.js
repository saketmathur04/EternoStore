import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';

const Canceled = () => {
  return (
    <div className="cancel-wrapper">
      <Head>
        <title>Order Canceled - SonicZone</title>
        <meta name="description" content="Your payment was canceled. Your cart is saved." />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="cancel">
        <p className="icon">
          <MdOutlineCancel />
        </p>
        <h2>
          Payment Cancelled
        </h2>
        <p className="email-msg">
          No worries — your cart items are still saved.
        </p>
        <p className="description">
          If you experienced any issues, please email
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

export default Canceled
