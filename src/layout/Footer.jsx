const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='p-6 text-sm items-center justify-center flex flex-col text-secondary mt-6'>
      <div>
        <span className='font-bold'>IML Tenis Capitanes</span>
      </div>
      <div className='flex gap-x-1 items-center justify-center flex-wrap'>
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
        <span> - </span>
        <span>Hecho con ❤︎ en {year}</span>
      </div>
    </div>
  )
}

export default Footer
