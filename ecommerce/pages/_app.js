import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '@/components';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  )
}
