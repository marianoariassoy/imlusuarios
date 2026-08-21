import { Link } from 'react-router-dom'
import Item from '../../components/ItemSmall'

const Fixture = ({ data }) => {
  return data.map(item => (
    <div
      key={item.id}
      className='flex flex-col gap-y-4 text-base bg-black/15 p-6   rounded-2xl whitespace-nowrap overflow-x-auto mb-2 shadow-lg'
    >
      <div className='flex flex-col font-medium gap-3'>
        <div className='text-secondary'>
          <span className='text-primary'>
            {item.date} {item.hour !== '-' ? `${item.hour}` : ''}
          </span>
          <span> </span>
          <span>{item.tournament_name}</span>
          <span> — </span>
          <span>#{item.id}</span>
        </div>
        <div className='flex items-center gap-x-2 whitespace-nowrap'>
          <Item
            title={item.home_name}
            image={item.home_image}
          />
          ⚡️
          <Item
            title={item.away_name}
            image={item.away_image}
          />
        </div>
      </div>
      <div>
        <div className='flex items-center gap-x-2'>
          <Link
            to={`/series/${item.id}`}
            className='btn-2'
          >
            Resultados
          </Link>

          <Link
            to={`/encuestas/${item.id}`}
            className='btn-2'
          >
            Encuesta
          </Link>
        </div>
      </div>
    </div>
  ))
}

export default Fixture
