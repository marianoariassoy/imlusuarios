import { useAuth } from '../context'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  const { isLoggedIn } = useAuth()
  const { pathname } = useLocation()

  return (
    isLoggedIn && (
      <Link
        to='/'
        className={
          pathname === '/'
            ? 'text-xs font-semibold text-primary'
            : 'text-xs font-semibold text-secondary hover:text-primary'
        }
      >
        INICIO
      </Link>
    )
  )
}

export default Menu
