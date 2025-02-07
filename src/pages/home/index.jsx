import { Helmet } from 'react-helmet'
import { Navigate } from 'react-router-dom'
import EquiposActuales from './EquiposActuales'
// import EquiposAnteriores from './EquiposAnteriores'
import { useAuth } from '../../context'
import Header from '../../components/Header'
import SeriesPorCargar from './SeriesPorCargar'
import Aviso from '../../components/Aviso'

const JugadoresContainer = () => {
  const { userData, isLoggedIn } = useAuth()
  if (!isLoggedIn) return <Navigate to='/login' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title={`¡Hola ${userData.name.split(' ')[0]}! `}
        emoji='🙂'
      />

      <Aviso
        emoji='👉'
        text='A continuación podrás ver tus próximas series y, en caso de que tu equipo resulte ganador, deberás cargar los
          resultados correspondientes'
      />

      <SeriesPorCargar id={userData.id} />

      <Aviso
        emoji='👉'
        text='También verás tus equipos de la temporada actual. Podrás modificar las listas de buena fe 
          hasta el 9 de marzo.'
      />

      <EquiposActuales id={userData.id} />
      {/* <EquiposAnteriores id={userData.id} /> */}
      <Helmet>
        <title>IML Tenis Capitanes</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
