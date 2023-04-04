import { useRouter } from 'next/router';

import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { Layout } from '@/components/layout/Layout' 

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isPathRoot = router.pathname === '/'

  return <>
    {isPathRoot && <Component {...pageProps} />}
    {!isPathRoot && <Layout>
      <Component {...pageProps} />
    </Layout>}
  </>
}
