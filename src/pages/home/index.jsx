import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Equipos from './Equipos'
import EquiposAnteriores from './EquiposAnteriores'
import { useAuth } from '../../context'
import Header from '../../components/Header'
import SeriesMain from './SeriesMain'

const Home = () => {
  const navigate = useNavigate()
  const { userData, isLoggedIn } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  if (isLoggedIn)
    return (
      <section className='fade-in flex flex-col gap-y-6'>
        <div>
          <Header
            title='IML Capitanes'
            description='Desde este espacio podes visualizar tus series, equipos, encuestas y gestionar todos los aspectos
            relacionados con la competencia.'
            emoji='😎'
          />
          <div className='mt-3 text-center leading-tight text-secondary'></div>
        </div>

        <SeriesMain id={userData.id} />
        <Equipos id={userData.id} />
        <EquiposAnteriores id={userData.id} />
      </section>
    )
}

export default Home
