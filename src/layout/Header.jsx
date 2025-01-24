import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../components/icons'
import Menu from './Menu'

const Header = () => {
  useEffect(() => {
    const logo = document.querySelector('.logo-main')

    window.onscroll = () => {
      if (window.scrollY > 0) {
        logo.classList.add('text-xs')
      } else {
        logo.classList.remove('text-xs')
      }
    }
  }, [])

  return (
    <div className='navbar w-full px-5 bg-base-100'>
      <div className='navbar-start'>
        <Menu />
      </div>
      <div className='navbar-center text-primary logo-main transition-all'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='navbar-end'></div>
    </div>
  )
}

export default Header
