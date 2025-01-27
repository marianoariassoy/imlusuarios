import Image from './Image'

const TitleRow = ({ image, title, link }) => {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='avatar'>
        <div className='w-6 rounded-full'>
          <a
            href={link}
            className='hover:opacity-70 transition-all'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src={image}
              alt={title}
            />
          </a>
        </div>
      </div>
      <a
        href={link}
        className='hover:text-primary font-medium'
        target='_blank'
        rel='noreferrer'
      >
        {title}
      </a>
    </div>
  )
}

export default TitleRow
