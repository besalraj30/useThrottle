import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import useThrottle from './useThrottle';

function App() {
  const [currentDimensions, setCurrentDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    window.addEventListener("resize", throttledHandleWindowResize);

    return () => {
      window.removeEventListener("resize", throttledHandleWindowResize);
    }
  })

  const handleWindowResize = () => {
    console.log('trigger');
    setCurrentDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const throttledHandleWindowResize = useThrottle(handleWindowResize, 2000);
  return (
    <>
      <div>
        Current dimensions are : Width : {currentDimensions.width} & Height : {currentDimensions.height}
      </div>
    </>
  )
}

export default App
