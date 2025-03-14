import { Link } from 'react-router-dom'
import Item from '../../components/Item'

const Fixture = ({ data }) => {
  return (
    <div className='overflow-x-auto text-sm whitespace-nowrap lg:whitespace-normal'>
      <table className='table w-full mb-3'>
        <thead>
          <tr>
            <th scope='col'>Fecha</th>
            <th scope='col'>Hora</th>
            <th scope='col'>Local</th>
            <th scope='col'>Visitante</th>
            <th scope='col'>Torneo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <td scope='row'>
                <div className='flex gap-x-2 items-center'>
                  <Link
                    to={`/series/${item.id}`}
                    className='font-medium text-primary hover:underline'
                  >
                    {item.date}
                  </Link>
                </div>
              </td>
              <td>{item.hour}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fixture
