import { useEffect, useRef, useState } from 'react'
import ScrollTopButton from '../Buttons/ScrollTopButton'
import Footer from './Footer'
import MainNavigation from './MainNavigation'

const MainLayout = ({ children }) => {
  const [divHeight, setDivHeight] = useState(0)

  const footer = useRef(null)

  useEffect(() => {
    setDivHeight(footer.current.clientHeight)
  }, [])
  return (
    <>
      <MainNavigation />
      <main className="relative">{children}</main>
      <Footer refHeight={footer} />

      <ScrollTopButton divHeight={divHeight} />
    </>
  )
}

export default MainLayout
