import ScreenWidthProvider from '../provider/ScreenWidthProvider'
import '../styles/globals.css'
import Navbar from '../src/components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ScreenWidthProvider>
      {(screenWidth) => {
        return (
          <>
            <Navbar screenWidth={screenWidth}/>
            <Component {...pageProps} screenWidth={screenWidth} />
          </>
        )
      }}
    </ScreenWidthProvider>
  )
}

export default MyApp
