import { Helmet } from 'react-helmet'
import { Navigate } from 'react-router-dom'
import EquiposActuales from './EquiposActuales'
import EquiposAnteriores from './EquiposAnteriores'
import { useAuth } from '../../context'
import Header from '../../components/Header'
import SeriesPorCargar from './SeriesPorCargar'

const JugadoresContainer = () => {
  const { userData, isLoggedIn } = useAuth()
  if (!isLoggedIn) return <Navigate to='/login' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title={`¡Hola ${userData.name.split(' ')[0]}! `}
        emoji='💪'
      />

      <div className='text-sm'>
        <p>
          👉 Acá podrás ver tus próximas series y, en caso de que tu equipo resulte ganador, deberás cargar los
          resultados correspondientes
        </p>
      </div>

      <SeriesPorCargar id={userData.id} />

      <div className='text-sm'>
        <p>
          👉 También verás tus equipos actuales y anteriores, y podrás modificar las listas de buena fe de los primeros
          hasta el 9 de marzo.
        </p>
      </div>

      <EquiposActuales id={userData.id} />
      <EquiposAnteriores id={userData.id} />
      <Helmet>
        <title>IML Tenis Capitanes</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
