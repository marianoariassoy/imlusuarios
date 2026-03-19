import { Link } from 'react-router-dom'
import Image from './Image'

const TitleRow = ({ image, title, link = '' }) => {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='avatar'>
        <div className='w-12 rounded-full'>
          {link ? (
            <Link
              to={link}
              className='hover:opacity-70 transition-all'
            >
              <Image
                src={image}
                alt={title}
              />
            </Link>
          ) : (
            <Image
              src={image}
              alt={title}
            />
          )}
        </div>
      </div>
      {link ? (
        <Link
          to={link}
          className='hover:text-primary text-nowrap leading-tight'
        >
          {title}
        </Link>
      ) : (
        <div className='text-nowrap leading-tight'>{title}</div>
      )}
    </div>
  )
}

export default TitleRow
