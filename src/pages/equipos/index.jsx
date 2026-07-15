import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useAuth } from '../../context'
import Integrantes from './Integrantes'
import Messages from '../../components/Messages'
import Header from '../../components/Header'

const IndexIntegrantes = () => {
  const { userData, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  const { id } = useParams()
  const { data, loading } = useFetch(`/captain/${userData.id}/teams/${id}`)

  if (loading) return <Loader />
  if (data === null) return <Messages text='🥲 No se encontro el equipo' />

  // console.log(data)
  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title={data.name}
        description={data.tournament_name}
      />
      <Integrantes
        id_captain={userData.id}
        id_team={id}
        id_season={data.season_id}
        category={data.category}
      />
    </section>
  )
}

export default IndexIntegrantes
