import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Integrantes from './Integrantes'
import Image from '../../components/Image'
import Seguridad from '../../components/Seguridad'
import { useAuth } from '../../context'
import Messages from '../../components/Messages'

const IndexIntegrantes = () => {
  Seguridad()
  const { id } = useParams()
  const { userData } = useAuth()
  const { data, loading } = useFetch(`/users/${userData.id}/teams/${id}`)
  if (loading) return <Loader />
  if (!data) return <Messages text='No se encontro el equipo 🥲' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <header className='flex flex-col gap-y-2 items-center'>
        <div className='text-center'>
          <h1 className='font-bold text-xl text-primary'>{data.name}</h1>
          <h2>
            <a
              href={`https://imltenis.com.ar/torneos/${data.tournament_id}`}
              className='font-medium hover:underline text-sm'
              target='_blank'
              rel='noreferrer'
            >
              {data.tournament_name}
            </a>
          </h2>
        </div>
      </header>

      <Integrantes id={id} />
    </section>
  )
}

export default IndexIntegrantes
