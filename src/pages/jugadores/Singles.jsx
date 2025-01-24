import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const JugadoresSingles = ({ id }) => {
  const { data, loading } = useFetch(`/players/${id}/singles`)
  if (loading) return <Loader />
  if (!data) return null

  const labels = [
    {
      name: 'Fecha'
    },
    {
      name: 'Oponente'
    },
    {
      name: 'Resultado'
    },
    {
      name: 'G/P'
    },
    {
      name: 'Torneo'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='text-center font-bold text-primary'>Singles disputados</h1>

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              {labels.map((label, index) => (
                <th
                  key={index}
                  className={index === 0 && 'pl-0'}
                >
                  {label.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td className='pl-0 opacity-70 font-medium'>{item.date}</td>
                <td>
                  <Link
                    to={`/jugadores/${item.oponent_id}`}
                    className='link-hover text-primary inline-block font-bold'
                  >
                    {item.oponent_name}
                  </Link>{' '}
                  <Link
                    to={`/equipos/${item.team_oponent_id}`}
                    className='hover:text-primary opacity-70'
                  >
                    ({item.team_oponent_name} )
                  </Link>
                </td>
                <td>
                  <span className='font-medium '>{item.score}</span>
                </td>
                <td>
                  <div className='h-7 w-7 rounded-full flex justify-center items-center border text-primary border-primary'>
                    {item.result}
                  </div>
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

export default JugadoresSingles
