import { Link } from 'react-router-dom'
import { useAuth } from '../context'
import Image from '../components/Image'

const Menu = () => {
  const { isLoggedIn, userData } = useAuth()

  if (!isLoggedIn) return null

  return (
    <Link to='/home'>
      <div className='w-10 h-10 rounded-full overflow-hidden'>
        <Image
          src={userData.image}
          alt={userData.name}
        />
      </div>
    </Link>
  )
}

export default Menu
