import { Link } from 'react-router-dom'
import { useAuth } from '../context'
import Image from '../components/Image'

const Menu = () => {
  const { isLoggedIn, userData } = useAuth()
  if (!isLoggedIn) return null

  return (
    <Link to='/home'>
      <div className='w-[3.7rem] h-[3.7rem] rounded-full overflow-hidden shadow-lg'>
        <Image
          src={userData.image}
          alt={userData.name}
        />
      </div>
    </Link>
  )
}

export default Menu
