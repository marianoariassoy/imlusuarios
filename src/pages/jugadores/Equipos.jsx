import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TeamItem from '../../components/TeamItem'

const JugadoresEquipos = ({ id }) => {
  const { data, loading } = useFetch(`/players/${id}/teams`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='text-center font-bold text-primary'>Equipos</h1>

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th className='pl-0'>Nombre</th>
              <th>Club</th>
              <th>Torneo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='pl-0'>
                  <TeamItem
                    id={item.team_id}
                    name={item.team_name}
                    image={item.image}
                  />
                </td>
                <td>
                  <Link
                    to={`/clubes/${item.club_id}`}
                    className='hover:text-primary'
                  >
                    {item.club_name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/torneos/${item.tournament_id}`}
                    className='link-hover text-primary'
                  >
                    {item.tournament_name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default JugadoresEquipos
