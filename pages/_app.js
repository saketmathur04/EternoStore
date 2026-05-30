import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster 
          toastOptions={{
            style: {
              background: '#fff',
              color: '#1d1d1f',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderRadius: '10px',
              fontWeight: 500,
            },
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
