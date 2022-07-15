import '../styles/globals.scss'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import 'nextjs-breadcrumbs/dist/index.css'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from 'store'

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null
  return (
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
