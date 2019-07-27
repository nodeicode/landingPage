import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static  getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=yes"/>
          <link rel="shortcut icon" type="image/x-icon" href="../static/favicon.ico"/>
          <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet"/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
