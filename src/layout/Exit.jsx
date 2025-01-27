import { useAuth } from '../context'

const Exit = () => {
  const { logout, isLoggedIn } = useAuth()

  return (
    isLoggedIn && (
      <button
        className='text-xs font-semibold text-secondary hover:text-primary'
        onClick={logout}
      >
        SALIR
      </button>
    )
  )
}

export default Exit
