import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='grid grid-cols-2 gap-4 my-8 items-center'>
      <Link
        to='/test-formacion'
        className='rounded-lg p-4 h-24 flex flex-col md:flex-row items-center justify-center text-center hover:bg-primary hover:text-white transition-all font-medium bg-white/5 gap-y-1 gap-x-2 shadow-lg'
      >
        <span className='text-xl'>👮🏻‍♂️</span>
        <span>Test de formación</span>
      </Link>
      <a
        href='#'
        className='rounded-lg p-4 h-24 flex flex-col md:flex-row items-center justify-center text-center hover:bg-primary hover:text-white transition-all font-medium bg-white/5 gap-y-1 gap-x-2 shadow-lg'
      >
        <span className='text-xl'>🚀</span>
        <span>Descargas</span>
      </a>
    </div>
  )
}

export default Menu
