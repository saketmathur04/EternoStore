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
        <p className="icon" style={{ color: '#f02d34', fontSize: '48px' }}>
          <MdOutlineCancel />
        </p>
        <h2 style={{ 
          marginTop: '20px', 
          fontWeight: 800, 
          fontSize: '28px', 
          color: '#1d1d1f',
          letterSpacing: '-0.5px'
        }}>
          Payment Cancelled
        </h2>
        <p style={{ 
          fontSize: '15px', 
          fontWeight: 500, 
          textAlign: 'center', 
          color: '#6e6e73', 
          marginTop: '8px' 
        }}>
          No worries — your cart items are still saved.
        </p>
        <p style={{ 
          fontSize: '14px', 
          fontWeight: 500, 
          textAlign: 'center', 
          color: '#86868b', 
          marginTop: '24px' 
        }}>
          If you experienced any issues, please email
          <a className="email" href="mailto:support@soniczone.com" style={{ marginLeft: '4px', color: '#f02d34', fontWeight: 600 }}>
            support@soniczone.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn" style={{ width: '300px' }}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled
