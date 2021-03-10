// pages/_app.js
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lohit Aryan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta charSet="utf-8" />
        <meta name="description" content="Check out about Lohit Aryan's and Social Handles!!"></meta>
        <link rel="prefetch" href="/profilecd.jpeg" as="image" type="image/jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp