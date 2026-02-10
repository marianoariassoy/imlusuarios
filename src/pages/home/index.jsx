import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EquiposActuales from './EquiposActuales'
import { useAuth } from '../../context'
import Header from '../../components/Header'
import SeriesPorCargar from './SeriesPorCargar'

const Home = () => {
  const navigate = useNavigate()
  const { userData, isLoggedIn } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  if (isLoggedIn)
    return (
      <section className='fade-in flex flex-col gap-y-6 text-base'>
        <div>
          <Header
            title='IML Capitanes 2026'
            emoji=''
          />

          <div className='mt-3 text-center'>
            Desde este espacio podes visualizar tus series, equipos y gestionar todos los aspectos relacionados con la
            competencia.
          </div>
        </div>

        <SeriesPorCargar id={userData.id} />
        <EquiposActuales id={userData.id} />
      </section>
    )
}

export default Home
