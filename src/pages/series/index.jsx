import { useParams, Navigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useAuth } from '../../context'
import Messages from '../../components/Messages'
import Header from '../../components/Header'
import Image from '../../components/Image'
import Serie from './Serie'

const index = () => {
  const { userData, isLoggedIn } = useAuth()
  if (!isLoggedIn) return <Navigate to='/home' />
  const { id } = useParams()
  const { data, loading } = useFetch(`/captain/${userData.id}/series/${id}`)
  const { data: matches, loadingMatches } = useFetch(`/series/${id}/matches`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='No se encontro esta serie 🥲' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title={`${data.date} ${data.hour} hs.`}
        description={data.tournament_name}
      />

      <div className='flex justify-center gap-x-6'>
        <div className='flex flex-col gap-y-2 items-center'>
          <div className='rounded-full overflow-hidden w-16'>
            <Image
              src={data.home_image}
              alt={data.home_name}
            />
          </div>
          <div className='text-center'>
            <h1 className='text-primary text-sm font-semibold'>{data.home_name}</h1>
            <span className='text-sm text-secondary'>Local</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-2 items-center'>
          <div className='rounded-full overflow-hidden w-16'>
            <Image
              src={data.away_image}
              alt={data.away_name}
            />
          </div>
          <div className='text-center'>
            <h1 className='text-primary text-sm font-semibold'>{data.away_name}</h1>
            <span className='text-sm text-secondary'>Local</span>
          </div>
        </div>
      </div>

      {loadingMatches ? (
        <Loader />
      ) : (
        data &&
        matches &&
        matches.map(match => {
          return (
            <Serie
              serie={data}
              match={match}
              key={match.id}
            />
          )
        })
      )}
    </section>
  )
}

export default index
