import { Link } from 'react-router-dom'
import Item from '../../components/ItemSmall'

const Fixture = ({ data }) => {
  return data.map(item => (
    <div
      key={item.id}
      className='flex flex-col gap-y-4 text-base bg-black/15 px-4 py-4 md:px-6 rounded-2xl whitespace-nowrap overflow-x-auto mb-2 shadow-lg'
    >
      <div className='flex items-center gap-x-2 whitespace-nowrap font-medium '>
        <span className='text-primary'>
          {item.date} {item.hour !== '-' ? `${item.hour}` : ''}
        </span>
        <Item
          title={item.home_name}
          image={item.home_image}
        />
        ⚡️
        <Item
          title={item.away_name}
          image={item.away_image}
        />
        <span className='text-primary'>{item.tournament_name}</span>
        <span className='pr-4 text-secondary'>#{item.id}</span>
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
