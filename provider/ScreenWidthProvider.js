import { useState, useEffect } from 'react'

const ScreenWidthProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    let timeoutId;

    // Function to update screenWidth
    const updateScreenWidth = () => setScreenWidth(window.innerWidth)

    // Initial setup
    updateScreenWidth()

    // Event listener to update screenWidth on window resize, debounced
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateScreenWidth, 10) // Adjust the debounce delay as needed
    }

    // Event listener to update screenWidth on window resize
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{children(screenWidth)}</>
}

export default ScreenWidthProvider
