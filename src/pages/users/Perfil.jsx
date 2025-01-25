import { Helmet } from 'react-helmet'
import Singles from '../jugadores/Singles'
import Dobles from '../jugadores/Dobles'
import Equipos from '../jugadores/Equipos'
import Estadisticas from './Estadisticas'
import { useAuth } from '../../context'
import Login from './Login'
import Header from '../../components/Header'

const JugadoresContainer = () => {
  const { isLoggedIn, userData } = useAuth()
  if (!isLoggedIn) return <Login />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header title={`¡Hola ${userData.name.split(' ')[0]}!`} />

      <Estadisticas id={userData.id} />
      <Equipos id={userData.id} />
      <Singles id={userData.id} />
      <Dobles id={userData.id} />
      <Helmet>
        <title>IML Tenis Usuarios</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
