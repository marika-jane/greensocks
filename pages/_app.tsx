import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
