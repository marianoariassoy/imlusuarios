import { Link } from 'react-router-dom'
import Item from '../../components/Item'

const Fixture = ({ data }) => {
  return (
    <div className='overflow-x-auto text-sm whitespace-nowrap lg:whitespace-normal'>
      <table className='table w-full mb-3'>
        <thead>
          <tr>
            <th scope='col'>Fecha</th>
            <th scope='col'>Local</th>
            <th scope='col'>Visitante</th>
            <th scope='col'>Torneo</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td scope='row'>
                <div className='flex gap-x-2 items-center'>
                  <Link
                    to={`/series/${item.id}`}
                    className='font-medium text-primary hover:underline'
                  >
                    {item.date} {item.hour}
                  </Link>
                </div>
              </td>
              <td>
                <Item
                  title={item.home_name}
                  image={item.home_image}
                  link={`/series/${item.id}`}
                />
              </td>
              <td>
                <Item
                  title={item.away_name}
                  image={item.away_image}
                  link={`/series/${item.id}`}
                />
              </td>
              <td>{item.tournament_name}</td>
              <td>
                <Link
                  to={`/encuestas/${item.id}`}
                  className='text-sm btn bg-transparent py-2 transition-all px-6 text-primary border border-primary'
                >
                  Encuesta
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fixture
