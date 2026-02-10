import { useAuth } from '../context'

const Exit = () => {
  const { logout, isLoggedIn } = useAuth()
  if (!isLoggedIn) return null

  return (
    <button
      className='text-sm bg-black/20 hover:bg-black/30 rounded-full py-2 transition-all px-6'
      onClick={logout}
      title='Cerrar sesión'
    >
      Salir
    </button>
  )
}

export default Exit
