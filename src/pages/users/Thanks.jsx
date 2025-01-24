import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='fade-in flex flex-col gap-y-3 text-center '>
      <div className='text-primary font-medium'>¡Tu registro fue realizado con éxito! 🎉</div>
      <div className='text-secondary text-sm flex flex-col'>
        <span className='text-secondary'>Ya sos parte de nuestra comunidad tenistica.</span>
        <Link
          to='/'
          className='hover:text-primary'
        >
          👉 Inicia sesión haciendo clic acá.
        </Link>
      </div>
    </div>
  )
}

export default Thanks
