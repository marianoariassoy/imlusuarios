import { useLocation } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  const { pathname } = useLocation()

  return (
    <div className='p-6 text-sm items-center justify-center flex flex-col text-secondary mt-12'>
      <div>
        <span className='font-bold'>IML Tenis {pathname === '/registro' ? 'Usuarios' : 'Capitanes'}</span>
      </div>
      <div className='flex gap-x-1 items-center justify-center flex-wrap'>
        <span>Hecho en {year}</span>
        <span> - </span>
        <span>
          <a
            href='mailto:hola@imltenis.com.ar'
            className='hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            hola@imltenis.com.ar
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
