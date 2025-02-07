import { Helmet } from 'react-helmet'
import { Navigate } from 'react-router-dom'
import EquiposActuales from './EquiposActuales'
// import EquiposAnteriores from './EquiposAnteriores'
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
        emoji='🙂'
      />

      <SeriesPorCargar id={userData.id} />

      <EquiposActuales id={userData.id} />
      {/* <EquiposAnteriores id={userData.id} /> */}
      <Helmet>
        <title>IML Tenis Capitanes</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
