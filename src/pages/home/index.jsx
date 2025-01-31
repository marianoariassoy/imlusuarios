import { Helmet } from 'react-helmet'
import { Navigate } from 'react-router-dom'
import CapitanEquiposActuales from './CapitanEquiposActuales'
import CapitanEquiposAnteriores from './CapitanEquiposAnteriores'
import { useAuth } from '../../context'
import Header from '../../components/Header'

const JugadoresContainer = () => {
  const { userData, isLoggedIn } = useAuth()

  if (!isLoggedIn) return <Navigate to='/' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title='¡Hola Capitán! 👋'
        description='Acá podes ver tus equipos actuales y anteriores'
      />

      <CapitanEquiposActuales id={userData.id} />
      <CapitanEquiposAnteriores id={userData.id} />

      <Helmet>
        <title>IML Tenis Capitanes</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
