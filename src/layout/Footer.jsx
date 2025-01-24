import { WhatsApp } from '../components/icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='p-6 text-sm items-center justify-center flex flex-col text-secondary'>
      <div>
        <span className='font-bold'>Liga de clubes IML Tenis</span>
      </div>
      <div className='flex gap-x-1 items-center justify-center flex-wrap'>
        <span>Buenos Aires, Argentina. &copy; {year}</span>
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
        <span> - </span>
        <span>
          <a
            href='https://wa.me/5491130171475'
            className='flex items-center gap-x-1 hover:underline'
          >
            <WhatsApp /> <span>11 3017 1475</span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
