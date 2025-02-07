import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <header className='sticky top-0 z-40 mb-3'>
        <Header />
      </header>
      <main className='mx-auto px-4 max-w-3xl w-screen'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
