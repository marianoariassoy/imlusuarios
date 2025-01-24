import { Link } from 'react-router-dom'

const Aviso = () => {
  return (
    <Link
      to='/presentacion'
      className='fixed top-24 left-5 bg-black/90 text-xs  p-6 font-medium flex items-center justify-center rounded-full w-32 h-32 lg:w-36 lg:h-36 text-white z-40 text-center hover:bg-black fade-in'
    >
      <span>¡Reservá tu lugar para el Clausura! 👈</span>
    </Link>
  )
}

export default Aviso
