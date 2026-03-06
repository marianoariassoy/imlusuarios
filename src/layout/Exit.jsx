import { useAuth } from '../context'

const Exit = () => {
  const { logout, isLoggedIn } = useAuth()
  if (!isLoggedIn) return null

  return (
    <button
      className='btn-2'
      onClick={logout}
      title='Cerrar sesión'
    >
      Salir
    </button>
  )
}

export default Exit
