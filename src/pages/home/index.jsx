import { Helmet } from 'react-helmet'
import CapitanEquiposActuales from './CapitanEquiposActuales'
import CapitanEquiposAnteriores from './CapitanEquiposAnteriores'
import { useAuth } from '../../context'
import Avatar from './Avatar'

const JugadoresContainer = () => {
  const { userData } = useAuth()

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Avatar data={userData} />
      <CapitanEquiposActuales id={userData.id} />
      <CapitanEquiposAnteriores id={userData.id} />

      <Helmet>
        <title>IML Tenis Capitanes</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
