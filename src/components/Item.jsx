import { Link } from 'react-router-dom'
import Image from './Image'

const TitleRow = ({ image, title, link }) => {
  return (
    <article className='flex items-center gap-x-3'>
      <div className='avatar'>
        <div className='w-10 rounded-full'>
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
          className='hover:text-primary font-medium'
        >
          {title}
        </Link>
      ) : (
        <div>{title}</div>
      )}
    </article>
  )
}

export default TitleRow
