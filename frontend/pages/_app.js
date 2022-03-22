import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/nprogress.css'
import NProgress from 'nprogress'

import { getLayout } from '../utils'
import { useEffect } from 'react'
import Router from 'next/router'

function MyApp({ Component, pageProps }) {

  const Layout = getLayout(Component) 

  useEffect(() => {  
    Router.onRouteChangeStart = () => NProgress.start()
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
