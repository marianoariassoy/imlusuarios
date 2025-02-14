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

      <div className='text-sm'>
        👋🏻 Bienvenido/a a tu nuevo panel de control para capitanes de IML Tenis. Desde acá podrás ver tus series y
        equipos para gestionar
      </div>

      <SeriesPorCargar id={userData.id} />
      <EquiposActuales id={userData.id} />
      {/* <EquiposAnteriores id={userData.id} /> */}
    </section>
  )
}

export default JugadoresContainer
