import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useAuth } from '../../context'
import Header from '../../components/Header'
import Aviso from '../../components/Aviso'
import Survey from './survey'

const index = () => {
  const navigate = useNavigate()
  const { userData, isLoggedIn } = useAuth()
  const { id } = useParams()
  const { data, loading } = useFetch(`/captain/${userData.id}/series/${id}`)

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  if (loading) return <Loader />
  if (data === null) return <Messages text='🥲 No se encontro esta encuesta' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div>
        <Header
          title={`Encuesta entre ${data.home_name} y ${data.away_name}`}
          description={`${data.date} ${data.hour}`}
        />
        <div className='mt-3 text-center leading-tight text-secondary'>
          Queremos conocer tu opinión. Tu devolución es clave para que podamos seguir mejorando la competencia juntos.
        </div>
      </div>

      <Survey
        id_serie={id}
        id_captain={userData.id}
      />

      <div className='flex justify-center'>
        <Aviso text='Esta encuesta es únicamente de uso interno, no será compartida. Quedate tranquilo 😉' />
      </div>
    </section>
  )
}

export default index
