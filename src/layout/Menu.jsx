// import { NavLink } from 'react-router-dom'
// import { menu } from '../components/data'
import { useAuth } from '../context'
import { Bars } from '../components/icons'

const Menu = () => {
  const { logout, isLoggedIn } = useAuth()

  return (
    <details className='dropdown'>
      <summary className='btn p-0 bg-transparent border-0 text-secondary text-sm hover:text-primary hover:bg-transparent'>
        <Bars />
      </summary>
      {isLoggedIn && (
        <ul className='menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow'>
          <li>
            <button onClick={logout}>Salir</button>
          </li>
        </ul>
      )}
    </details>
  )
}

export default Menu
