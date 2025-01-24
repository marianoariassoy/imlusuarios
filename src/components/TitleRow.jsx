import { Link } from 'react-router-dom'
import Image from './Image'
const TitleRow = ({ num, image, title, link }) => {
  return (
    <td className='pl-0'>
      <div className='flex items-center gap-x-3'>
        {num && <span className='font-bold'>{num}</span>}
        <div className='avatar'>
          <div className='w-12 lg:w-14 rounded-full'>
            <Link
              to={link}
              className='hover:opacity-70 transition-all'
            >
              <Image
                src={image}
                alt={title}
              />
            </Link>
          </div>
        </div>
        <Link
          to={link}
          className='hover:text-primary font-bold'
        >
          {title}
        </Link>
      </div>
    </td>
  )
}

export default TitleRow
