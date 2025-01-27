import { useAuth } from '../context'
import { useNavigate } from 'react-router-dom'

const Seguridad = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn) navigate('/login')
}

export default Seguridad
