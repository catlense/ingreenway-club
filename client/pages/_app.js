import NextNprogress from 'nextjs-progressbar'
import './global.css'

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <NextNprogress 
        color="#74c044"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}