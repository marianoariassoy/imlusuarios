import { useAuth } from '../context'

const Exit = () => {
  const { logout, isLoggedIn } = useAuth()
  if (!isLoggedIn) return null

  return (
    <button
      className='text-sm btn bg-transparent py-2 transition-all px-6 text-primary border border-primary'
      onClick={logout}
      title='Cerrar sesión'
    >
      Salir
    </button>
  )
}

export default Exit
