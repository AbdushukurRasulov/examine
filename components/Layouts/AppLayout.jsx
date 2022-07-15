import AppNavigation from './AppNavigation'
import Footer from './Footer'

const AppLayout = ({ children }) => {
  return (
    <>
      <AppNavigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default AppLayout
