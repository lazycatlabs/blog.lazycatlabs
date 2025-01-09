import '@/css/globals.css'
import '@/css/tailwind.css'
import 'katex/dist/katex.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import Banner from '@/components/Banner'
import { Onest } from 'next/font/google'

import 'highlight.js/styles/panda-syntax-dark.css' // Dark theme

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET
const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
})
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider className={onest.className} defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Banner />
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
