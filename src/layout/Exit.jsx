import { useAuth } from '../context'

const Exit = () => {
  const { logout, isLoggedIn } = useAuth()

  return (
    isLoggedIn && (
      <button
        className='text-xl'
        onClick={logout}
        title='Cerrar sesión'
      >
        🚀
      </button>
    )
  )
}

export default Exit
